import express from 'express'
import { isAuth } from '../../config/jwtConfig.js'
import { isUser } from '../../config/userConfig.js'
import { addToCart } from '../controllers/cartControllers.js'

const cartRoutes = express.Router()

cartRoutes.post('/addtocart', isAuth, isUser, addToCart)

export default cartRoutes