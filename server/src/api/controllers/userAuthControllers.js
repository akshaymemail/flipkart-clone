import User from "../../models/user.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../../config/jwtConfig.js";

// SIGNUP CONTROLLER
export const signup = (req, res) => {
  User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (!err) {
      // there is no any error, check for user
      if (foundUser) {
        // user found means user already have in our databse
        return res.status(400).json({
          message: "user already registered!",
        });
      }

      // found new user
      // 1. destructure body data to register
      // 2. register him / her
      const { firstName, lastName, email, username, password } = req.body;
      new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        hashPassword: bcrypt.hashSync(password, 10),
      }).save((err, savedUser) => {
        if (!err) {
          // user registered successfully
          res.status(201).json({ message : `You've successully registered!` });
        } else {
          // there was an error
          res.status(400).json({
            message: err,
          });
        }
      });
    } else {
      // there was an error
      return res.status(400).json({
        message: err,
      });
    }
  });
};


// SIGNIN CONTROLLER 
export const signin = (req, res) => {
  User.findOne({email : req.body.email}, (err, foundUser) => {
    if(!err) {
      // there is no error check if user found or not
      if(foundUser){
        // user exist so now check for password
        if(bcrypt.compareSync(req.body.password, foundUser.hashPassword)){
          // username and passowrd is correct
          const {_id, firstName, lastName, email, role} = foundUser
          res.status(200).json({
            token : generateToken(foundUser),
            user : {
              _id,firstName, lastName, email, role,
              fullName : `${firstName}`+` `+`${lastName}`
            }
          })
          
        } else {
          res.status(400).json({message : "Enter username or password is incorrect!"})
        }
      } else {
        // user not found 
        res.status(404).json({message : "User not found!"})
      }
    } else {
      // there is something error
      res.status(400).json({message : err})
    }
  })
}