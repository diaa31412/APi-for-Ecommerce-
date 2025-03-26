const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRoutes')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const ordersRouter = require('./routes/ordersRoutes')
const cartRouter = require('./routes/cartRoutes')


//initilize dotenv
dotenv.config()


//Connct to Database

mongoose.connect(process.env.DATA_BASE)
.then(() => console.log('DB Coneccted'))
.catch((err) => console.log(err))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/',authRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/cart', cartRouter)
app.use('/api/users/',userRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))