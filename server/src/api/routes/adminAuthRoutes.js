import express from 'express'
import { signup } from '../controllers/adminAuthControllers.js'

const adminRouter = express.Router()

// ADMIN SIGNUP ROUTE
adminRouter.post('/signup', signup)

// ADMIN SIGNIN ROUTE 
adminRouter.post('/signin', (req, res) => {
    res.status(200).json({message : 'Signin API is working'})
})

export default adminRouter