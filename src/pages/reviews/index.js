import { Flex, Divider } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { getReviews } from "@/src/controllers/reviews"
import { globalPageStyles } from "@/src/utils/staticData"
import { Reviews } from "@/src/components/Reviews"

const reviews = ({ reviewsData }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} minH="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Reviews reviewsData={reviewsData} />
      <Footer />
    </Flex>
  )
}

export async function getStaticProps() {
  const reviewsData = await getReviews()

  return {
    props: {
      reviewsData: reviewsData,
    },
  }
}

export default reviews
