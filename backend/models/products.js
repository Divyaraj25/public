import mongoose from "mongoose";
 
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
});
 
const Product = mongoose.model("User", productSchema);
 
export default Product