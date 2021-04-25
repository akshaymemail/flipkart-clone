import JWT from 'jsonwebtoken'

// GENERATING TOKEN 
export const generateToken = user => {
    const {_id, name, email, role} = user
    return JWT.sign({
        _id,
        name,
        email,
        role
    }, process.env.JWT_SECRET, {expiresIn : '15d'})
}

// VERIFYING USER TO MANAGE SESSIONS
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization
    // checking if Authorization is exist or not
    if(authorization){
        // exist means tokens are found, now we need to verfy if the user is valid or not
        const token = authorization.split(' ')[1] // returns string after baerer
        JWT.verify(token,process.env.JWT_SECRET, (err, decode) => {
            if(!err){
                req.user = decode // adding user to req
                next()
            }else{
                res.status(401).json({message : 'Invalid Token!'})
            }
        })
    }else {
        // token doesn't exist
        res.status(400).json({message : 'Authorization is required!'})
    }
}