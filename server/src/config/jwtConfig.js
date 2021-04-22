import JWT from 'jsonwebtoken'
export const generateToken = user => {
    const {_id, name, email, role} = user
    return JWT.sign({
        _id,
        name,
        email,
        role
    }, process.env.JWT_SECRET, {expiresIn : '15d'})
}