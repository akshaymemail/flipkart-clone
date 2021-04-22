import express from 'express'
import { isAuth } from '../../config/jwtConfig.js'
import { profile } from '../controllers/profileControllers.js'

const profileRouter = express.Router()

profileRouter.post('/profile', isAuth, profile)

export default profileRouter