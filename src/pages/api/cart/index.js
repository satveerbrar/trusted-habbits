import connectToDatabase from "@/src/utils/dbConnect"
import Cart from "@/src/models/cart"

export default async function handler(req, res) {
  const { method, query } = req
  if (method == "GET") {
    await connectToDatabase()
    const cartData = await Cart.findOne({ user: query.userId }).populate(
      "items.product",
    )
    return res.status(200).json(cartData)
  } else if (method == "POST") {
    await connectToDatabase()
    const { user, items } = body
    let existingCart = await Cart.findOne({ user: user })
    if (existingCart) {
      existingCart.items.push(...items)
      await existingCart.save()
      return res.status(201).json({ message: "Item added in Cart" })
    } else {
      const cart = new Cart(body)
      await cart.save()
      return res.status(201).json({ message: "Cart created" })
    }
  }
}
