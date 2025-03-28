const mongoose = require("mongoose");

const userDetail = new mongoose.Schema({
  name: { type: String, required: true },
  income: { type: Number, required: true },
  job: { type: String, required: true },
  age: { type: Number, required: true },
  riskLevel: { 
    type: String, 
    enum: ["Low", "Medium", "High"], 
    required: true 
  },
  target: { type: Number, required: true }
});

const User = mongoose.model("UserDetail", userDetail);
module.exports = User;