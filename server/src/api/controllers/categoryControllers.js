import Category from "../../models/categories.js"
import slugify from "slugify"

// this function structure the categoris in the form of
// parent child or sub categoris structure
const processCategories = (foundCategories, parentId = null) => {
    const categoryList = []
    let categories
    if(parentId == null){
        categories = foundCategories.filter(fc => fc.parentId == undefined)
    } else {
        categories = foundCategories.filter(fc => fc.parentId == parentId)
    }

    categories.forEach(category => categoryList.push({
        _id : category._id,
        name : category.name,
        slug : category.slug,
        children : processCategories(foundCategories, category._id)
    }))

    return categoryList
}

// CREATE CATEGORY CONTROLLER
export const createCategory = (req, res) => {
    const categoryObject = {
        name : req.body.name,
        slug : slugify(req.body.name)
    }

    // attatch parantId is parentId is available
    if(req.body.parentId !== undefined){
        categoryObject.parentId = req.body.parentId
    }

    // attatch the image path if available
    if(req.file){
        categoryObject.categoryImage = `${process.env.DOMAIN}/public/${req.file.filename}`
    }
    new Category(categoryObject).save((err, savedCategory) => {
        if(!err){
            res.status(201).json({savedCategory})
        }else {
            // there was an error while creating category
            res.status(400).json({err})
        }
    })
}

// GET CATEGORIES CONTROLLER 
export const getCategories = (req, res) => {
    Category.find({}, (err, foundCategories) => {
        if(!err){
            const processedCategories = processCategories(foundCategories)
            res.status(200).json(processedCategories)
        }else{
            res.status(400).json({err})
        }
    })
}