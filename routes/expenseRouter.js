const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");
const auth = require("../middleware/auth");


router.post("/add", auth,expenseController.addExpense);


router.get("/:userId",auth, expenseController.getExpenses);

module.exports = router;