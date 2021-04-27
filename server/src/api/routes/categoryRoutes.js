import express from 'express'
import { isAdmin } from '../../config/adminConfig.js'
import { isAuth } from '../../config/jwtConfig.js'
import { createCategory, getCategories } from '../controllers/categoryControllers.js'
import multer from 'multer'
import {nanoid} from 'nanoid'
import _ from 'lodash'

const productRoutes = express.Router()

// multer middleware 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files')
    },
    filename: function (req, file, cb) {
      cb(null, _.kebabCase(req.body.name) + '_' + nanoid()+'.jpg')
    }
  })
   
const Upload = multer({ storage: storage })

const categoryRoutes = express.Router()

// CREATE CATEGORY ROUTE
categoryRoutes.post('/create', isAuth, isAdmin, Upload.single('categoryImage'),  createCategory)

// GET CATEGORY ROUTE 
categoryRoutes.get('/categories', getCategories)

export default categoryRoutes