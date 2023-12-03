import connectToDatabase from "@/utils/dbConnect";
import Product from "@/models/product";

export default async function handler(req, res) {
  const { method } = req;
  if (method == "GET") {
    await connectToDatabase();
    const productsData = await Product.find();
    return res.status(200).json(productsData);
  }
}