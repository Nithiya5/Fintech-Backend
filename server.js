const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRouter");
const expenseController = require("./controllers/expenseController");
const userDetailRoutes = require("./routes/userDetailRoutes");

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");

mongoose.connect("mongodb+srv://keerthanaravikumar188:keerthu123@cluster0.wfcwchf.mongodb.net/FinancialApp?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));


app.use("/api/users", userRoutes);  
app.use("/api/expenses", expenseRoutes);
app.use("/", userDetailRoutes);


setInterval(expenseController.resetMonthlyExpenses, 24 * 60 * 60 * 1000); 


const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});