const express = require("express");
require("dotenv").config();
require("colors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
// Database
const connectDB = require("./config/database");
connectDB();

// Requires
const errorHandler = require("./middleware/errorMiddleware");

// Routes
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors("*"));

// Test Route
// app.get("/", (req, res) => res.send("Server Running Successfully!"));
app.get("/", (req, res) =>
  res.send(
    `<h1>To Do App is Working. Click <a href=${process.env.FRONTEND_URL} > here </a> to visit frontend </h1>`
  )
);

// Routes
app.use("/todo", todoRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`.cyan));
