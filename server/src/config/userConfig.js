export const isUser = (req, res, next) => {
    if(req.user.role === 'user'){
        next()
    }else{
        res.status(400).json({message : 'User access denied!'})
    }
}