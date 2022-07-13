const { Router } = require('express')
const products = Router()
const {
    addProducts,
    idProducts,
    allProducts,
    deleteProduct,
    editProducto
} = require('../controllers/controllersProducts')
const {checkAdmin}= require('./../middleware/admin.js')

products.route('/')
    .post(checkAdmin,addProducts)//
    .get(allProducts)

products.route('/:id')
    .get(idProducts)
    .put(checkAdmin,editProducto)//
    .delete(checkAdmin,deleteProduct)//

module.exports = products