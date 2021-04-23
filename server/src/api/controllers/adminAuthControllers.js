import User from "../../models/user.js"
import bcrypt from 'bcrypt'

export const signup = (req, res) => {
    User.findOne({ email : req.body.email }, (err, foundUser) => {
        if(!err){
            // no error check if there is existing user or not 
            if(foundUser) {
                // user already exist
                return res.status(400).json({message : 'user already exist!'})
            }

            // user is new so registered  
            const {firstName, lastName, email, username,password} = req.body
            new User({
                firstName : firstName,
                lastName : lastName,
                email : email,
                username : username,
                hashPassword : bcrypt.hashSync(password, 10),
                role : 'admin'
            }).save((err, savedUser) => {
                if(!err){
                    res.status(201).json({createUser : savedUser})
                }else {
                    res.json({message : err})
                }
            })
        } else {
            res.status(400).json({message : 'Something went wrong!'})
        }
    })
}