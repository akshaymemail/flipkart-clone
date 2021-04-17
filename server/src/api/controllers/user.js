import User from "../../models/user.js";
import bcrypt from 'bcrypt'

const signup = (req, res) => {
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

export default signup