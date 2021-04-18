import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import signUpRouter from './api/routes/signup.js'

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
    useCreateIndex : true
}
mongoose.connect(url, options).then(() => {
    console.log('Connected To MongoDB Atlas !')
}).catch(error => {
    console.log(error)
})

// ROUTES 
app.use('/api/user/', signUpRouter)

// HOME ROUTE
app.get('/', (req, res) => {
    res.status(200).send({message : 'Node Is Here!'})
})

// SPINNING THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})