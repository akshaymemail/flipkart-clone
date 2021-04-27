import mongoose from 'mongoose'

// CART SCHEMA
const cartSchema  = mongoose.Schema({
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    cartItems : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Product",
                required: true,
            },
            quantity : {
                type : Number,
                default : 1
            },
            price : {
                type : Number,
                required : true,
            }
        }
    ]
}, {timestamps : true})

// CART MODEL
const Cart = mongoose.model('Cart', cartSchema)

export default Cart