const carServices = require('../services/carServices')

const createCar = async (req, res) => {
    try {
        const result = await carServices.create(req.body)
        res.status(201).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getCarById = async (req, res) => {
    try {
        const result = await carServices.getById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllCar = async (req, res) => {
    try {
        const result = await carServices.getAll()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}

const updateCar = async (req, res) => {
    try {
        const result = await carServices.update(req.params.id, req.body)
        res.status(200).json({message: 'updated', result})
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteCar = async (req, res) => {
    try{
        const result = await carServices.remove(req.params.id)
        res.status(200).json(result)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    createCar,
    getCarById,
    getAllCar,
    updateCar,
    deleteCar
}