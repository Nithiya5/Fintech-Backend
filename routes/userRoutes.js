const express= require("express");
const Router = express.Router();
const UserControllers = require("../controllers/userController");
const auth = require("../middleware/auth");

 
Router.post("/register" ,UserControllers.register);
Router.post("/login" , UserControllers.login);

module.exports=Router;