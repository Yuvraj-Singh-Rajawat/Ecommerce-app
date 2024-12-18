const cloudinary = require("cloudinary").v2;
const productModel = require("../models/productModel");


// function for add product

const addProduct = async (req, res) => {
  try {
    
     const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    // Check if price is a valid number
    if (isNaN(price) || price === '') {
      return res.json({ success: false, message: 'Invalid price' });
    }

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(img => img !== undefined);

    let imageUrl = await Promise.all(
      images.map(async (image) => {
        const url = await cloudinary.uploader.upload(image.path, {
          resource_type: "image",});
        return url.secure_url;
      })
    )
    
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      image: imageUrl,
      bestSeller: bestSeller === 'true' ? true : false,
      date: Date.now()
    }

    const product = new productModel(productData);
    await product.save();

    res.json({success: true, message: "Product added successfully"});
  } catch (error) {
    res.json({success: false, message: "Error while adding product", error});
  }

}


//function for listing products
const listProducts = async (req, res) =>{
  try {
    const products = await productModel.find();
    res.json({success: true, products});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error while listing products", error});
  }
}

//function for removing product
const removeProduct = async (req, res) =>{
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({success: true, message: "Product removed successfully"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error while removing product", error});
  }
}

// function for single product list
const singleProduct = async (req, res) =>{
  try {
    const {productId} = req.body;
    const product = await productModel.findById(productId);
    res.json({success: true, product});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error while listing single product", error});
  }
}

module.exports = {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct
}
