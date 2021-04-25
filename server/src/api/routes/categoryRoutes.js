import express from 'express'
import { isAdmin } from '../../config/adminConfig.js'
import { isAuth } from '../../config/jwtConfig.js'
import { createCategory, getCategories } from '../controllers/categoryControllers.js'

const categoryRoutes = express.Router()

// CREATE CATEGORY ROUTE
categoryRoutes.post('/create', isAuth, isAdmin, createCategory)

// GET CATEGORY ROUTE 
categoryRoutes.get('/categories', getCategories)

export default categoryRoutes