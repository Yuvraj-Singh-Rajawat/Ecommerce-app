const express = require("express");

const { registerUser, loginUser, adminLogin } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

module.exports = userRouter