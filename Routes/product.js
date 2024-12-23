const express = require('express')
const router = express.Router()

// Controllers
const { read, list, create, update, remove } = require('../Controllers/product.controllers')

// GET /api/products
router.get('/products', list)

// GET /api/products/:id
router.get('/products/:id', read)

// POST /api/products
router.post('/products', create)

// PUT /api/products
router.put('/products', update)

// // DELETE /api/products
router.delete('/products', remove)

module.exports = router