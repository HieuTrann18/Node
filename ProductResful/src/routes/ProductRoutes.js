const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.post('/', ProductController.createProduct)
router.get('/:id', ProductController.getProductById)
router.get('/', ProductController.getAllProduct)
router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

module.exports = router