const Expense = require("../models/expenseModel");


exports.addExpense = async (req, res) => {
    try {
        const { userId, category, amount, date } = req.body;

        if (!userId || !category || !amount || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const expense = new Expense({ userId, category, amount, date });
        await expense.save();
        
        res.status(201).json({ message: "Expense added successfully", expense });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


exports.getExpenses = async (req, res) => {
    try {
        const { userId } = req.params;
        const expenses = await Expense.find({ userId });

        res.status(200).json(expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


exports.resetMonthlyExpenses = async () => {
    const today = new Date();
    if (today.getDate() === 1) {
        await Expense.deleteMany({});
        console.log("Expenses reset for the new month.");
    }
};