const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, )
}

//Route for use login
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
      return res.json({success:false,  message: "User does not exist" });
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match){
      return res.json({success:false,  message: "Invalid credentials" });
    }
    const token = createToken(user._id);
    res.json({success:true, token });
  } catch (error) {
    res.json({success:false,  message: "Error while Loggin in ", error });
  }
};

//Route for user Registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking if user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({success:false,  message: "User already exists" });
    }

    // validating email format and strong password

    if (!validator.isEmail(email)) {
      return res.json({success:false,  message: "Invalid email" });
    }
    if(password.length < 8){
      return res.json({success:false,  message: "Please enter a strong password" });
    }

    // hashing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newuser = new userModel({ name, email, password: hashedPassword });

    const user = await newuser.save();

    const token = createToken(user._id);

    res.json({success:true, token });
    
  } catch (error) {
    res.json({success:false,  message: "Error while Registering", error });
  }
};
 
//Route for admin login

const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success:true, token });
    }
    else{
      res.json({success:false,  message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({success:false,  message: "Error while Admin Login ", error });
  }
}

module.exports = {
  loginUser,
  registerUser,
  adminLogin
};
