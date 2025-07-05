const ProductService = require('../services/ProductService')

const createProduct = async (req, res) => {
    try{
        const result = await ProductService.create(req.body)
        res.status(201).json({message: 'create successfully', result})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const getProductById = async (req, res) => {
    try{
        const result = await ProductService.getById(req.params.id)
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const getAllProduct = async (req, res) => {
    try{
        const result = await ProductService.getAll()
        res.status(200).json({result: result})
    }catch(err){
       res.status(500).json({error: err.message})
    }
}

const updateProduct = async (req, res) => {
    try{
        const result = await ProductService.update(req.params.id, req.body)
         res.status(200).json({result: result})
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const deleteProduct = async (req, res) => {
    try{
        await ProductService.remove(req.params.id)
        res.status(200).json({ message: 'Delete successfully' })
    }catch(err){
         res.status(500).json({error: err.message})
    }
}

module.exports = {
    createProduct,
    getProductById,
    getAllProduct,
    updateProduct,
    deleteProduct
}