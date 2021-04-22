import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// CREATING USER SCHEMA 
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20,
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        index : true,
        lowecase : true,
        min : 6,
        max : 20
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowecase : true
    },
    contactNumber : {
        type : String,
        max : 10
    },
    hashPassword : {
        type : String,
        required : true,
        min : 6,
        max : 50
    },
    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    },
    profilePicture : {
        type : String
    }
}, {timestamps : true})

// CREATING USER MODEL 
const User = mongoose.model('User', userSchema)

export default User