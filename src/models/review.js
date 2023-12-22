import mongoose from "mongoose"

const { Schema, models, model } = mongoose

const reviewSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  postedOn: {
    type: Date,
    default: Date.now,
  },
})

const Review = models.Review || model("Review", reviewSchema)

export default Review
