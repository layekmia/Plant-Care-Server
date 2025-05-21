const express = require("express");
const { getAllPlnats, createPlant, getPlantById, deletePlant, updatePlant} = require("../controllers/plant.Controller");

const plantRoutes = express.Router();

plantRoutes.post('/', createPlant);
plantRoutes.get('/', getAllPlnats);
plantRoutes.get('/:id', getPlantById);
plantRoutes.delete('/:id', deletePlant);
plantRoutes.put('/:id', updatePlant);
module.exports = plantRoutes;
