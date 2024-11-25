const products = require('../data/products.js')
let lastIndex = products.at(-1).id

function index(req, res) {
    res.json(products)
}

function show(req, res) {
    const id = parseInt(req.params.id)
    const product = products.find(product => product.id === id)
    if (!product) {
        res.status(404)
        res.json({
            message: 'Product not found'
        })
    }
    else {
        res.json(product)
    }
}

function store(req, res) {
    const { name, description, price, tags } = req.body
    if (!name || !description || !price || !tags) {
        res.status(400)
        return res.json({
            message: 'Parametri non validi'
        })
    }

    lastIndex++
    const newProduct = {
        id: lastIndex,
        name,
        description,
        price,
        tags
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
}

function update(req, res) {
    const id = parseInt(req.params.id)
    const product = products.find((product) => product.id === id)
    if (!product) {
        res.status(404)
        res.json({
            message: "prodotto non trovato"
        })
        return
    }

    product.name = req.body.name
    product.description = req.body.description
    product.price = req.body.price
    product.tags = req.body.tags

    res.json(product)
}

function modify(req, res) {
    res.send(`Modifico parzialmente un prodotto`)
}

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const productIndex = products.findIndex((product) => product.id === id)
    if (productIndex === -1) {
        res.status(404)
        res.json({
            message: 'Product not found'
        })
    }
    else {
        products.splice(productIndex, 1)
        res.sendStatus(204)
        console.log(products)
    }
}

module.exports = { index, show, store, update, modify, destroy }