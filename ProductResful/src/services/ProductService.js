const ProductSchema = require('../models/ProductSchema')

const create = async (product) => {
    let result = await ProductSchema.create(product)
    return result
}

const getById = async (id) => {
    let result = await ProductSchema.findById(id)
    return result
}

const getAll = async () => {
    let result = await ProductSchema.find()
    return result
}

const update = async (id, updatedProduct) => {
    let result = await ProductSchema.updateOne({_id: id}, updatedProduct)
    return getById(id)
}

const remove = async (id) => {
    let result = await ProductSchema.deleteOne({_id: id})
    return result
}

module.exports = {
    create,
    getById,
    getAll,
    update,
    remove
}