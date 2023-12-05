import connectToDatabase from "@/src/utils/dbConnect"
import Review from "@/src/models/review"

export default async function handler(req, res) {
  const { method } = req
  if (method == "GET") {
    await connectToDatabase()
    const reviewsData = await Review.find()
    return res.status(200).json(reviewsData)
  }
}
