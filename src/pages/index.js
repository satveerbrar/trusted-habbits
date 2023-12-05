import {
  Box,
  Divider,
  Heading,
  Image,
  Flex,
  Text,
  HStack,
  Link,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react"

import { FaEye } from "react-icons/fa"

import { Navbar } from "@/src/components/Navbar"
import { CommonButton } from "@/src/components/CommonButton"
import { BlackSection } from "@/src/components/BlackSection"
import { Footer } from "@/src//components/Footer"
import { Review } from "@/src/components/Review"
import { globalPageStyles } from "@/src/utils/staticData"
import { tempReviewsData } from "@/src/utils/temporary"
import { ChooseUs } from "@/src/components/ChooseUs"

const Home = ({ reviewsData }) => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles

  const visibleReviews =
    useBreakpointValue({ base: 2, md: 3, lg: 4 }) || reviewsData.length

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

      <Box bg="white">
        <Box mx={mx} maxW={{ base: maxWbase, lg: maxWlg }} w={w} align="center">
          <Heading as="h2" size="xl" my="20px">
            Customer Reviews
          </Heading>
          <HStack align="start" spacing={4} justifyContent="center">
            {reviewsData.slice(0, visibleReviews).map((review, index) => (
              <Review key={index} {...review} />
            ))}
          </HStack>

          <Box my="15px">
            <Icon as={FaEye} mr="5px" paddingTop="5px" />
            <Link
              mr="5px"
              href="/reviews"
              textDecoration="underline"
              display="inline-block"
              _hover={{ color: "blue.500" }}
            >
              <Text fontSize="md" fontWeight="regular" align="center">
                See All Reviews
              </Text>
            </Link>

            <Link
              href="/newreview"
              textDecoration="underline"
              display="inline-block"
              ml={2}
              _hover={{ color: "blue.500" }}
            >
              <Text fontSize="md" fontWeight="regular" align="center">
                Post a review
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box as="footer">
        <Footer />
      </Box>
    </Flex>
  )
}

export async function getStaticProps() {
  // Replace tempReviewsData with fetch from database in future
  const reviewsData = tempReviewsData

  return {
    props: {
      reviewsData: reviewsData,
    },
  }
}

export default Home
