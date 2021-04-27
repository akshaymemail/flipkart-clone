import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
        required : true,
        unique : true
    },
    categoryImage : {
        type : String
    },
    parentId : {
        type : String
    }
}, {timestamps : true})

const Category = mongoose.model("Category", categorySchema)

export default Category