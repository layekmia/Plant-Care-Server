const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    careLevel: { type: String, required: true },
    wateringFrequency: { type: String, required: true },
    lastWateredDate: { type: Date, required: true },
    nextWateringDate: { type: Date, required: true },
    healthStatus: { type: String, required: true },
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("plants", plantSchema);
