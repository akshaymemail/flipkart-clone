// a middleware file that gives result of request validation

import {validationResult} from 'express-validator'

const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()[0].msg})
    }

    next()
}

export default isRequestValidated