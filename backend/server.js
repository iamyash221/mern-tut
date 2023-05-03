const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`port started on ${port}`));
