const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add text" });
    throw new Error("Please add text");
  }

  res.status(200).json({ message: "Set goal" });
});

const putGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoals, putGoals, deleteGoals };
