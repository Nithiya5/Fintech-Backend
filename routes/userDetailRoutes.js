const express = require("express");
const router = express.Router();
const userController = require("../controllers/userDetailController");
const auth = require("../middleware/auth");


router.get("/api/users/:id", auth,userController.getUserById);
router.post("/api/users", auth,userController.addUser);
router.put("/api/users/:id",auth, userController.updateUser);

module.exports = router;