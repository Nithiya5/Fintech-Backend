const UserDetail = require("../models/userDetailSchema");

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
};


exports.addUser = async (req, res) => {
    try {
        const { name, income, job, age, riskLevel, target } = req.body;
        
        const newUser = new UserDetail({
            name,
            income,
            job,
            age,
            riskLevel,
            target
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: "Error adding user", details: error.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserDetail.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: "Error updating user", details: error.message });
    }
};