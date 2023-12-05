import connectToDatabase from "@/src/utils/dbConnect"
import Review from "@/src/models/review"

export default async function handler(req, res) {
  const { method, body } = req
  if (method == "GET") {
    await connectToDatabase()
    const reviewsData = await Review.find()
    return res.status(200).json(reviewsData)
  } else if (method == "POST") {
    await connectToDatabase()
    const { user, rating, comment } = body
    const newReview = new Review({ user, rating, comment })
    await newReview.save()
    return res.status(201).json({ message: "Review Created" })
  }
}
