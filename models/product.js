const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  description: { type: String, required: true },
  inventory: { type: Number, default: 0, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;