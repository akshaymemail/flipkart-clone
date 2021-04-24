import {body} from 'express-validator'

export const userSigninValidator = [
    body('email').notEmpty().withMessage('email is required!'),
    body('email').isEmail().withMessage('a valid email is required'),

    body('password').notEmpty().withMessage('password is required!'),
    body('password').isLength({min : 6}).withMessage('password should be atleast 6 characters'),
    body('password').isLength({max : 50}).withMessage('password should be max 50 characters'),
]


export const userSignupValidator = [

]