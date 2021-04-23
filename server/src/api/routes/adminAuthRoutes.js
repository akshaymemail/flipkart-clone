import express from 'express'
import { signin, signup } from '../controllers/adminAuthControllers.js'

const adminRouter = express.Router()

// ADMIN SIGNUP ROUTE
adminRouter.post('/signup', signup)

// ADMIN SIGNIN ROUTE 
adminRouter.post('/signin', signin)

export default adminRouter