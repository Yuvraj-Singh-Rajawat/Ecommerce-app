const cloudinary = require("cloudinary").v2;

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_SECRET_KEY || "",
  });

  if (!cloudinary.config().cloud_name || !cloudinary.config().api_key || !cloudinary.config().api_secret) {
    throw new Error("Cloudinary config variables are not set");
  }
};

module.exports = connectCloudinary;

