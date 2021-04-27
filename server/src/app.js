import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import adminRouter from './api/routes/adminAuthRoutes.js'
import cartRoutes from './api/routes/cartRoutes.js'
import categoryRoutes from './api/routes/categoryRoutes.js'
import productRoutes from './api/routes/productRoutes.js'
import profileRouter from './api/routes/profileRoutes.js'
import userRouter from './api/routes/userAuthRoutes.js'
import path,{dirname} from 'path'

// EXPRESS APP
const app = express()

// MIDDLEWARES 
app.use(express.json())

// CONSTANTS
const PORT = process.env.PORT || 5000

// CONNECTING MONGODB ATLAS 
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@akshay.vlzrm.mongodb.net/${process.env.DB_NAME}`
const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
}
mongoose.connect(url, options).then(() => {
    console.log('Connected To MongoDB Atlas !')
}).catch(error => {
    console.log(error)
})

// STATIC FILES
app.use('/public',express.static('upload_files'))

// ROUTES 
app.use('/api/user', userRouter)
app.use('/api/user', profileRouter)
app.use('/api/admin', adminRouter)
app.use('/api/category',categoryRoutes)
app.use('/api/product', productRoutes)
app.use('/api/user/cart', cartRoutes)

// HOME ROUTE
app.get('/', (req, res) => {
    res.status(200).send({message : 'Node Is Here!'})
})

// SPINNING THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})