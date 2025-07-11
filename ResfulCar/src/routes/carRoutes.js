const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')

router.post('/', carController.createCar)
router.get('/:id', carController.getCarById)
router.get('/', carController.getAllCar)
router.put('/:id', carController.updateCar)
router.delete('/:id', carController.deleteCar)

module.exports = router