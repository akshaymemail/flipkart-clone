import Product from "../../models/product.js"
import slugify from 'slugify'
import { productPictures } from "../../lib/helpers.js"

export const product = (req, res) => {
    //res.status(200).json({file : req.files, body : req.body})
    const {name, price, description, quantity, category, } = req.body

    new Product({
        name,
        slug : slugify(name),
        productPictures : productPictures(req.files),
        price,
        description,
        quantity,
        category,
        createdBy : req.user._id,
    }).save((err, savedProduct) => {
        res.status(201).json({savedProduct})
    })
}