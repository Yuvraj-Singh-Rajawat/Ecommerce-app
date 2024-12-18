const userModel = require("../models/userModel.js");


// add products to user cart
const addToCart = async (req, res) => {
  try {
    const {userId, itemId, size} = req.body

    const userData = await userModel.findById(userId)
    let cartData = userData.cartData;
    
    if(cartData[itemId]) {
      if(cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    
    await userModel.findByIdAndUpdate(userId, {cartData})

    res.json({success: true, message: "Product added to cart"})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error while adding product to cart"})
  }
}

// update user cart
const updateCart = async (req, res) => {
  try {

    const {userId, itemId, size, quantity} = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;
    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, {cartData})
    res.json({success: true, message: "Cart updated"})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error while updating cart"})
  }
}

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const {userId} = req.body;
    const userData = await userModel.findById(userId);
    res.json({success: true, cartData: userData.cartData})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error while getting cart data"})
  }
}

module.exports =  { addToCart, updateCart, getUserCart };
