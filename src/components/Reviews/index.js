import { Box, Heading, Text, VStack } from "@chakra-ui/react"

import { globalPageStyles } from "@/src/utils/staticData"
import { CommonButton } from "../CommonButton"
import { DetailedReview } from "./DetailedReview"
import { renderStars } from "@/src/controllers/util"

export const Reviews = ({ reviewsData }) => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles
  // Calculate overall rating and star distribution
  const overallRating =
    reviewsData.reduce((sum, review) => sum + review.rating, 0) /
    reviewsData.length

  const starDistribution = [0, 0, 0, 0, 0]
  reviewsData.forEach((review) => {
    starDistribution[review.rating - 1]++
  })

  return (
    <Box bg="white" pb="300px">
      <Box
        mx={mx}
        maxW={{ base: maxWbase, lg: maxWlg }}
        w={w}
        display="flex"
        mt="40px"
      >
        <Box>
          <Heading fontSize="2xl" fontWeight="bold" mb="6px">
            Customer Reviews
          </Heading>
          {renderStars(overallRating)}
          <Text as="span" ml="10px" fontSize="17px" color="#2596be">
            {overallRating.toFixed(2)}
          </Text>
          <Box w="280px" mt="8px">
            {[5, 4, 3, 2, 1].map((rating) => (
              <Box
                key={rating}
                display="flex"
                alignItems="center"
                marginBottom="2"
              >
                {/* Rating Text */}
                <Text
                  color="#2596be"
                  marginRight="2"
                >{`${rating} stars:`}</Text>

                {/* Bar Container */}
                <Box
                  h="20px"
                  w="180px"
                  bg="gray.200"
                  borderRadius="md"
                  marginRight="2"
                  display="flex"
                  alignItems="center"
                >
                  {/* Rating Bar */}
                  <Box
                    h="100%"
                    bg="#eca04d"
                    borderRadius="md"
                    width={`${
                      (starDistribution[rating - 1] / reviewsData.length) * 100
                    }%`}
                  />
                </Box>

                {/* Percentage Display */}
                <Text color="#2596be">{`${(
                  (starDistribution[rating - 1] / reviewsData.length) *
                  100
                ).toFixed(0)}%`}</Text>
              </Box>
            ))}
          </Box>
          <Heading fontSize="xl" fontWeight="bold" mt="20px">
            Share your experience
          </Heading>
          <CommonButton
            text="Write a review"
            fontSize="md"
            borderRadius="md"
            mt="10px"
            h="40px"
            w="260px"
          />
        </Box>
        <Box ml="80px">
          <VStack align="start">
            {reviewsData.map((review) => (
              <DetailedReview
                key={review._id}
                name={`${review.user.firstName} ${review.user.lastName}`}
                rating={review.rating}
                comment={review.comment}
                avatarUrl=""
                postedOn={review.postedOn}
              />
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}
