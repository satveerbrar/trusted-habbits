import React, { useState } from "react"
import { Box, Textarea, Text, Heading } from "@chakra-ui/react"
import { renderStars } from "@/src/controllers/util"
import { CommonButton } from "../CommonButton"
import { useSession } from "next-auth/react"
import { postReview } from "@/src/controllers/reviews"

const StarRating = ({ rating, setRating }) => {
  return (
    <Box display="flex">
      {renderStars(rating).map((star, index) => (
        <Box as="button" key={index} onClick={() => setRating(index + 1)}>
          {star}
        </Box>
      ))}
    </Box>
  )
}

export const PostReview = () => {
  const { data: session } = useSession()
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (rating === 0) {
      alert("Please select a rating.")
      return
    }
    const reviewData = { user: session.user.id, rating, comment }

    await postReview(reviewData)

    setComment("")
    setRating(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Heading fontSize="xl" fontWeight="bold" mt="20px" mb="10px">
          Share your experience
        </Heading>
        <StarRating rating={rating} setRating={setRating} />
        <Textarea
          placeholder="Share your experience..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          mt="4"
          required
        />
        <CommonButton
          type="submit"
          text="Submit Review"
          fontSize="sm"
          borderRadius="md"
          mt="10px"
          h="40px"
          w="120px"
        />
      </Box>
    </form>
  )
}
