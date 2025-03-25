const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRoutes')


//initilize dotenv
dotenv.config()


//Connct to Database

mongoose.connect(process.env.DATA_BASE)
.then(() => console.log('DB Coneccted'))
.catch((err) => console.log(err))



app.use('/api/products', productRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))