const { Router } = require('express')

const router = Router()

router.use('/product', require('./product.route'))
router.use('/brand', require('./brand.route'))

module.exports = router