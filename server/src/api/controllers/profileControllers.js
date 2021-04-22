import JWT from 'jsonwebtoken'
export const profile = (req, res) => {
    res.status(200).json({user: req.user,message : 'profile is here!'})
}