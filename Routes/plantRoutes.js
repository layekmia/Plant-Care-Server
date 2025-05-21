const express = require("express");
const { getAllPlnats, createPlant, getPlantById, deletePlant, updatePlant} = require("../controllers/plant.Controller");

const router = express.Router();

router.post('/', createPlant);
router.get('/', getAllPlnats);
router.get('/:id', getPlantById);
router.delete('/:id', deletePlant);
router.put('/:id', updatePlant);
module.exports = router;
