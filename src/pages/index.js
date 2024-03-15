import { Box, Divider, Heading, Image, Flex, Text } from "@chakra-ui/react"

import { Navbar } from "@/src/components/Navbar"
import { CommonButton } from "@/src/components/CommonButton"
import { BlackSection } from "@/src/components/BlackSection"
import { Footer } from "@/src//components/Footer"
import { globalPageStyles } from "@/src/utils/staticData"
import { ChooseUs } from "@/src/components/ChooseUs"
import { ReviewsSection } from "../components/ReviewsSection"
import { getReviews } from "../controllers/reviews"
import { useRouter } from "next/router"

const Home = ({ reviewsData, error }) => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles
  const router = useRouter()
  const handleShopNowClick = () => {
    router.push("/products")
  }

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex
        mx={mx}
        maxW={{ base: maxWbase, lg: maxWlg }}
        w={w}
        flex="1"
        mt="80px"
      >
        <Flex direction="column" width={{ base: "80%", md: "50%" }}>
          <Heading
            fontSize={{ base: "30px", sm: "30px", md: "36px", lg: "48px" }}
            color="black"
          >
            Unleashing Confidence Through Advanced Protection
          </Heading>
          <Heading
            fontSize="18px"
            fontWeight="regular"
            color="black"
            mt={{ base: "25px", sm: "25px", md: "30px", lg: "35px" }}
          >
            Comfort, Confidence, Empowerment.
          </Heading>
          <CommonButton
            text="SHOP NOW"
            bg="#0f6357"
            w={{ base: "150px", sm: "150px", md: "180px", lg: "220px" }} // Reduced button size for tablet view
            h="58px"
            fontWeight="bold"
            fontSize={{ base: "20px", sm: "20px", md: "25px", lg: "32px" }} // Reduced font size for tablet view
            boxShadow="4px 4px 4px rgba(0, 0, 0, 1)"
            mt={{ base: "25px", sm: "25px", md: "30px", lg: "35px" }}
            onClick={handleShopNowClick}
          />
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src="/images/collage-image.svg"
            alt="Collage Image"
            width="100%"
            height="auto"
          />
        </Box>
      </Flex>
      <BlackSection cardCount={4} globalPageStyles={globalPageStyles} />

      {/* Choose us Section */}
      <ChooseUs />
      {/* Try sample section */}
      <Box bg="black">
        <Box mx={mx} maxW={{ base: maxWbase, lg: maxWlg }} w={w} my="80px">
          <Flex direction="row">
            <Flex direction="column">
              <Heading
                color="white"
                fontWeight="500"
                fontSize={{ base: "20px", md: "30px" }}
                mb="20px"
              >
                Have any doubts? Order a glove sample before finalizing your
                purchase decision
              </Heading>
              <Text color="white">✓ Free Sample ✓ Free Delivery</Text>
            </Flex>
            <Flex direction="row">
              <CommonButton
                text="Try it!"
                bg="#007665"
                w="150px"
                h="58px"
                fontWeight="regular"
                fontSize="18px"
                mt="10px"
              />
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* Reviews Section */}
      {error ? <></> : <ReviewsSection reviewsData={reviewsData} />}

      {/* Footer Section */}
      <Box as="footer">
        <Footer />
      </Box>
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

export default Home
