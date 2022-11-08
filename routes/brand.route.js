const { Router } = require('express')
const { brandController } = require('../constrollers/brand.controller')
const router = Router()

router.get('/', brandController.getBrand)

router.post('/', brandController.addBrand)

router.delete('/', brandController.removeBrand)

module.exports = router