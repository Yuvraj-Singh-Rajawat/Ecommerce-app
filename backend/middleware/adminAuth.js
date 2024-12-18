const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {1

  try {
    const {token} = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",});
    }


    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",})
    }
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}; 

module.exports = adminAuth