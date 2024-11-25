const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController.js')

//index
router.get('/', productController.index)

//show
router.get('/:id', productController.show)

//store
router.post('/', productController.store)

//update
router.put('/:id', productController.update)

//modify
router.patch('/:id', productController.modify)

//destroy
router.delete('/:id', productController.destroy)

module.exports = router