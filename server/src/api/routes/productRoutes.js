import express from 'express'
import { isAdmin } from '../../config/adminConfig.js'
import { isAuth } from '../../config/jwtConfig.js'
import { product } from '../controllers/productControllers.js'
import multer from 'multer'
import {nanoid} from 'nanoid'
import _ from 'lodash'

const productRoutes = express.Router()

// multer middleware 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
      cb(null, _.kebabCase(req.body.name) + '_' + nanoid()+'.jpg')
    }
  })
   
const Upload = multer({ storage: storage })

productRoutes.post('/create',  isAuth , isAdmin, Upload.array('productPictures'), product)

export default productRoutes