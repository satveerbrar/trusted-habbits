import connectToDatabase from "@/utils/dbConnect"
import Product from "@/models/product"

export default async function handler(req, res) {
  const { method, query } = req
  const { id } = query
  if (method == "GET") {
    await connectToDatabase()
    const productsData = await Product.findById(id)
    return res.status(200).json(productsData)
  }
}
