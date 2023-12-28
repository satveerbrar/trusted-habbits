import { Flex, Divider, Box, Text } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { getReviews } from "@/src/controllers/reviews"
import { globalPageStyles } from "@/src/utils/staticData"
import { Reviews } from "@/src/components/Reviews"

const reviews = ({ reviewsData, error }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} minH="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      {error ? (
        <Box pt="20" textAlign="center" minH="65vh" bg="white">
          <Text color="red.500">Sorry failed to load reviews page.</Text>
        </Box>
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
        error: "Failed to load reviews.",
      },
    }
  }
}

export default reviews
