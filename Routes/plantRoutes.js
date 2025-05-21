const express = require("express");
const { getAllPlnats, createPlant, getPlantById, deletePlant, updatePlant, getUserPlants} = require("../controllers/plant.Controller");

const router = express.Router();

router.post('/', createPlant);
router.get('/', getAllPlnats);
router.get('/user', getUserPlants);
router.get('/:id', getPlantById);
router.delete('/:id', deletePlant);
router.put('/:id', updatePlant);
module.exports = router;
