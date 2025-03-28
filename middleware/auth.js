const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "Forbidden 🛑🛑" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Token expired. Please login again!" });
      }
      return res.status(401).json({ error: "Unauthorized!" });
    }

    try {
      const user = await User.findOne({ _id: payload.userId }).select("-password");

      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error verifying user:", error);
      return res.status(500).json({ error: "Internal server error!" });
    }
  });
};
