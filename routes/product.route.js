const { Router } = require('express')
const { productController } = require('../constrollers/product.controller')
const router = Router()

router.get('/', productController.getProduct)

router.get('/:id', productController.getProductsById)

router.post('/', productController.addProduct)

router.delete('/:id', productController.removeProduct)

module.exports = router;