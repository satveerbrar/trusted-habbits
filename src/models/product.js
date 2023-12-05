import mongoose from "mongoose"

const { Schema, models, model } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discountedPrice: {
    type: Number,
    min: 0,
  },
  imageSrc: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],
  description: [
    {
      type: String,
      required: true,
    },
  ],
})

const Product = models.Product || model("Product", productSchema)

export default Product
