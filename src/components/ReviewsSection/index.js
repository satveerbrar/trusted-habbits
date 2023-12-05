import {
  Box,
  Heading,
  Text,
  HStack,
  Link,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FaEye } from "react-icons/fa"

import { globalPageStyles } from "@/src/utils/staticData"
import { Review } from "./Review"

export const ReviewsSection = ({ reviewsData }) => {
  const { mx, maxWbase, maxWlg, w } = globalPageStyles

  const visibleReviews =
    useBreakpointValue({ base: 2, md: 3, lg: 4 }) || reviewsData.length
  return (
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
  )
}
