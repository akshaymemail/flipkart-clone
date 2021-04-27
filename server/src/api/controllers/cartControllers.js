import Cart from "../../models/cart.js";

export const addToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }, (err, foundCart) => {
    if (!foundCart) {
      // there is not any cart created for this user
      // so create a new cart
      new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItem],
      }).save((err, savedCartItem) => {
        if (!err) {
          // cart item save successully
          res.status(201).json({ savedCartItem });
        } else {
          // there was an error
          res.status(400).json({ err });
        }
      });
    } else {
      // cart is already created for this user
      // so update the cartItems field

      // 1. check if current product is already exists or not
      // 2. if not exists then push the current product
      const item = foundCart.cartItems.find((c) => c.product == req.body.cartItem.product)
      if (!item) {
        // new product found add this to the cart items
        Cart.findOneAndUpdate(
          { user: req.user._id },
          { "$push": { cartItems: req.body.cartItem } },
          (err, updatedCart) => {
            if (!err) {
              // cartItems updated successully
              res.status(200).json({ updatedCart });
            } else {
              // there was an error
              res.status(400).send({ err });
            }
          }
        );
      } else {
        // this product is already exists in cartItems
        // so update the quantity of product
        Cart.findOneAndUpdate({ "user": req.user._id, 'cartItems.product' : req.body.cartItem.product },{ 
            "$set": { 
                'cartItems.$': {
                    ...req.body.cartItem,
                    quantity : Number(item.quantity) + Number(req.body.cartItem.quantity)
                }
            }},(err, updatedCart) => {
              if(!err){
                  res.status(200).json({updatedCart})
              }else {
                  res.status(400).json({err})
              }
        });
      }
    }
  });
};
