const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");

// App config
const app = express();
const port = process.env.PORT || 4000;
dotenv.config();
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

