import { Navbar } from "@/components/Navbar";
import { Box, Divider, Heading, Image, Flex } from "@chakra-ui/react";
import { CommonButton } from "@/components/CommonButton";

const Home = () => {
  const globalPageStyles = {
    bg: "#D9D9D9",
    mx: "auto",
    maxW: "90%",
    w: "100%",
  };

  return (
    <Flex direction="column" bg={globalPageStyles.bg} height="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex
        mx={globalPageStyles.mx}
        maxW={globalPageStyles.maxW}
        w={globalPageStyles.w}
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
            bg="#BD7C0A"
            w={{ base: "150px", sm: "150px", md: "180px", lg: "300px" }} // Reduced button size for tablet view
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
    </Flex>
  );
};

export default Home;
