import User from "../../models/user.js"
import bcrypt from 'bcrypt'
import { generateToken } from "../../config/jwtConfig.js"

// ADMIN SIGNUP CONTROLLER
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

// ADMIN SIGNIN CONTROLLER 

export const signin = (req, res) => {
    User.findOne({ email : req.body.email }, (err, foundUser) => {
        if(!err){
            // there is no any error, check for user
            if(foundUser){
                if(foundUser.role === 'admin'){
                    // user with the given email found
                // now check for password
                if(bcrypt.compareSync(req.body.password, foundUser.hashPassword) && foundUser.role === 'admin'){
                    // found right credentials 
                    const {_id, firstName, lastName, email, role} = foundUser
                    res.status(200).json({
                        token : generateToken(foundUser), // generates token
                        user : {
                            _id, firstName, lastName, email, role,
                            fullName : `${firstName+ ' ' +lastName}`
                        }
                    })
                }else {
                    // either username or password is incorrect 
                    res.status(401).json({message : 'Either username or password is incorrect!'})
                }
                }
            } else {
                // user with given email not found 
                res.status(404).json({message : 'user not found'})
            }
        } else {
             // there was an error
             res.status(500).json({message : 'someting went wrong!'})
        }
    })
}