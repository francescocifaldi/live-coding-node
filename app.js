const express = require('express')
const app = express()
const port = 3000
const productsRouter = require('./routers/products.js')
const notFound = require('./middlewares/not-found.js')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('root')
})

app.use('/products', productsRouter)

app.use(notFound)

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})