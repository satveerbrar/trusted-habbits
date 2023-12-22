import mongoose from "mongoose"
const { Schema, models, model } = mongoose

const cartItemSchema = new mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const cartSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  items: [cartItemSchema],
})

const Cart = models.Cart || model("Cart", cartSchema)
export default Cart
