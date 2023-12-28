import { Flex, Divider, Box, Text } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { getReviews } from "@/src/controllers/reviews"
import { globalPageStyles } from "@/src/utils/staticData"
import { Reviews } from "@/src/components/Reviews"
import { ErrorText } from "@/src/components/ErrorText"

const reviews = ({ reviewsData, error }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} minH="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      {error ? (
        <ErrorText error={error} />
      ) : (
        <Reviews reviewsData={reviewsData} />
      )}
      <Footer />
    </Flex>
  )
}

export async function getStaticProps() {
  try {
    const reviewsData = await getReviews()

    return {
      props: {
        reviewsData: reviewsData,
      },
    }
  } catch (error) {
    console.error("Failed to fetch reviews:", error)
    return {
      props: {
        reviewsData: [],
        error: "Sorry server down please check back later",
      },
    }
  }
}

export default reviews
