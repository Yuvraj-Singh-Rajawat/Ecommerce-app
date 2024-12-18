const express = require("express");
const {getUserCart, addToCart, updateCart} = require("../controllers/cartController");
const authUser = require("../middleware/auth");

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart)
cartRouter.post("/add", authUser, addToCart)
cartRouter.post("/update", authUser, updateCart)

module.exports = cartRouter