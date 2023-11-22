import {
  Box,
  Divider,
  Heading,
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
  HStack,
  Link,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FaEye } from "react-icons/fa";

import { Navbar } from "@/components/Navbar";
import { CommonButton } from "@/components/CommonButton";
import { BlackSection } from "@/components/BlackSection";
import { Footer } from "@/components/Footer";
import { InfoCard } from "@/components/InfoCard";
import { Review } from "@/components/Review";

const Home = () => {
  const globalPageStyles = {
    bg: "#D9D9D9",
    mx: "auto",
    maxWbase: "90%",
    maxWlg: "65%",
    w: "100%",
  };

  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles;

  const visibleReviews =
    useBreakpointValue({ base: 2, md: 3, lg: 4 }) || reviewsData.length;

  const chooseUsInfo = [
    {
      number: "01",
      title: "Durable Resilience",
      description:
        "Our gloves are crafted with top-tier materials, ensuring long-lasting durability to withstand the rigors of any task.",
      color: "#F3F4F6",
    },
    {
      number: "02",
      title: "Precision Fit Technology",
      description:
        "Enjoy a glove that feels like a second skin. Our Precision Fit Technology ensures a snug and comfortable fit",
      color: "white",
    },
    {
      number: "03",
      title: "Weather-Defying Performance",
      description:
        "Conquer the elements with gloves designed to defy weather extremes. Our weather-resistant materials provide optimal protection.",
      color: "#F3F4F6",
    },
    {
      number: "04",
      title: "Breathable Comfort",
      description:
        "Experience a new level of comfort with our breathable gloves. Engineered with ventilation channels, they allow airflow to keep your hands cool and comfortable.",
      color: "white",
    },
    {
      number: "05",
      title: "Touchscreen Compatibility",
      description:
        "Stay connected without removing your gloves. Our touchscreen-compatible design enables you to use smartphones and tablets effortlessly.",
      color: "#F3F4F6",
    },
    {
      number: "06",
      title: "Stylish Versatility",
      description:
        "Our gloves seamlessly blend fashion and function, offering a versatile accessory that complements any attire.",
      color: "white",
    },
  ];

  const reviewsData = [
    {
      name: "John Doe",
      rating: 4,
      comment:
        "Great product! Highly recommended. Quality exceeded expectations. Will buy again.",
      avatarUrl: "avatar-1.jpg",
      postedOn: "15/02/2022",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment:
        "Excellent service and fast delivery. Impressed with the packaging. A delightful shopping experience.",
      avatarUrl: "avatar-2.jpg",
      postedOn: "10/02/2022",
    },
    {
      name: "Bob Johnson",
      rating: 4,
      comment:
        "Good product, could be better. Sturdy build, minor improvements possible. Overall satisfied.",
      avatarUrl: "avatar-3.jpg",
      postedOn: "25/05/2022",
    },
    {
      name: "Alice Williams",
      rating: 5,
      comment:
        "Absolutely fantastic! Love it. Exceeded my expectations. Beautiful design and excellent performance.",
      avatarUrl: "avatar-4.jpg",
      postedOn: "19/02/2023",
    },
    {
      name: "Charlie Brown",
      rating: 4,
      comment:
        "Good value for the price. Reliable performance. Recommended for budget-conscious buyers.",
      avatarUrl: "avatar-5.jpg",
      postedOn: "13/08/2023",
    },
  ];

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex
        mx={mx}
        maxW={{ base: maxWbase, lg: maxWlg }}
        w={w}
        flex="1"
        mt="80px">
        <Flex direction="column" width={{ base: "80%", md: "50%" }}>
          <Heading
            fontSize={{ base: "30px", sm: "30px", md: "36px", lg: "48px" }}
            color="black">
            Unleashing Confidence Through Advanced Protection
          </Heading>
          <Heading
            fontSize="18px"
            fontWeight="regular"
            color="black"
            mt={{ base: "25px", sm: "25px", md: "30px", lg: "35px" }}>
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
      {/* <Box bg="white" paddingTop={{ base: "50px", md: "100px", lg: "150px" }}>
        <Box mx={mx} maxW={{ base: maxWbase, lg: maxWlg }} w={w} padding="50px">
          <Text
            fontSize={{ base: "md", md: "xl", lg: "2xl" }}
            fontWeight="400"
            fontFamily="Arial"
            align="center">
            “Trusted Habbits gloves embody excellence, setting a new standard in
            hand safety. Engineered for superior protection and comfort, they
            empower you with confidence in every task. Trusted by professionals,
            our gloves redefine habits, providing unmatched security. Elevate
            your safety with Trusted Habbits – where protection meets
            excellence, trusted by many.”
          </Text>
        </Box>
      </Box> */}

      {/* Choose us Section */}
      <Box bg="white">
        <Box
          mx={mx}
          maxW={{ base: maxWbase, lg: maxWlg }}
          w={w}
          mt="180px"
          mb="20px">
          <Heading
            as="h2"
            fontSize="40px"
            align="center"
            marginY="30px"
            fontWeight="600"
            color="black">
            Why Choose Us
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(6, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={4}>
            {chooseUsInfo.map((info) => (
              <GridItem key={info.number} colSpan={{ base: 6, md: 1, lg: 1 }}>
                <InfoCard {...info} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Try sample section */}
      <Box bg="black">
        <Box mx={mx} maxW={{ base: maxWbase, lg: maxWlg }} w={w} my="80px">
          <Flex direction="row">
            <Flex direction="column">
              <Heading
                color="white"
                fontWeight="500"
                fontSize={{ base: "20px", md: "30px" }}
                mb="20px">
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
              _hover={{ color: "blue.500" }}>
              <Text fontSize="md" fontWeight="regular" align="center">
                See All Reviews
              </Text>
            </Link>

            <Link
              href="/newreview"
              textDecoration="underline"
              display="inline-block"
              ml={2}
              _hover={{ color: "blue.500" }}>
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
  );
};

export default Home;
