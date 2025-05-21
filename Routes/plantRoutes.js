const express = require("express");
const { getAllPlnats, createPlant} = require("../controllers/plant.Controller");

const plantRoutes = express.Router();

plantRoutes.get("/", getAllPlnats);
plantRoutes.post('/', createPlant);
module.exports = plantRoutes;
