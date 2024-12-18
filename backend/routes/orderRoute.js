const express = require("express");
const { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } = require("../controllers/orderController");
const adminAuth = require("../middleware/adminAuth");
const authUser = require("../middleware/auth");
const orderRouter = express.Router();

// admin features
orderRouter.post("/list",adminAuth, allOrders);
orderRouter.post("/status",adminAuth, updateStatus);

// user features
orderRouter.post("/place",authUser, placeOrder);
orderRouter.post("/stripe",authUser, placeOrderStripe);
orderRouter.post("/razorpay",authUser, placeOrderRazorpay);


// user features
orderRouter.post("/userorders", authUser, userOrders)

// verify payment
orderRouter.post("/verifyStripe",authUser, verifyStripe)
orderRouter.post("/verifyRazorpay",authUser, verifyRazorpay)

module.exports = orderRouter