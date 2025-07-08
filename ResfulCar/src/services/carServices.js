const carSchema = require('../models/carSchema')

const create = async (car) => {
    const result = await carSchema.create(car)
    return result
}

const getById = async (id) => {
    const result = await carSchema.findById(id)
    return result
}

const getAll = async () => {
    const result = await carSchema.find()
    return result
}

const update = async (id, updatedCar) => {
    const result = await carSchema.updateOne({_id: id}, updatedCar)
    return getById(id)
}

const remove = async (id) => {
    return await carSchema.remove(id)
}

module.exports = {
    create,
    getById,
    getAll,
    update,
    remove
}