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
        <Flex direction="column" width="50%">
          <Heading fontSize="48px" color="black">
            Unleashing Confidence Through Advanced Protection
          </Heading>
          <Heading fontSize="18px" fontWeight="regular" color="black" mt="35px">
            Comfort, Confidence, Empowerment.
          </Heading>
          <CommonButton
            text="SHOP NOW"
            bg="#BD7C0A"
            w="220px"
            h="58px"
            fontWeight="bold"
            fontSize="32px"
            boxShadow="4px 4px 4px rgba(0, 0, 0, 1)"
            mt="35px"
          />
        </Flex>
        <Flex direction="column" width="50%">
          <Box>
            <Image
              src="/images/collage-image.svg"
              alt="Collage Image"
              width="100%"
              height="auto"
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
