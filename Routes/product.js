const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.send('Product 555')
})

router.get('/products/:id', (req, res) => {
    res.send('Product product')
})

router.post('/products', (req, res) => {
    res.send('Product post')
})

router.put('/products', (req, res) => {
    res.send('Product put')
})

router.delete('/products', (req, res) => {
    res.json({ 
        id : 1 ,
        name: 'lut'
    })
})

module.exports = router