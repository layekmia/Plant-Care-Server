const mongoose = require('mongoose')
const Plant = require("../models/plant");

exports.createPlant = async (req, res) => {
  console.log(req.body);
  try {
    const newPlant = new Plant(req.body);
    const savedPlant = await newPlant.save();
    res.status(201).json({
      message: "Plant added successfully",
      plant: savedPlant,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors,
      });
    }
    res.status(500).json({
      message: "An error occurred while adding the plant",
      error: error.message,
    });
  }
};

exports.getAllPlnats = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch plants",
      error: error.message || "Internal Server Error",
    });
  }
};

exports.getPlantById = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid plant ID" });
  }
  try {
    const plant = await Plant.findById(id);

    if (!plant) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.status(200).json(plant);
  } catch (error) {
    console.error("Error fetching plant:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch plant", error: error.message });
  }
};


