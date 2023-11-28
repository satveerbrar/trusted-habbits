import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { globalPageStyles } from "@/utils/staticData";
import { teamMemberInfo } from "@/utils/staticData";

const About = () => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles;

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex bg="white" direction="column">
        <Box
          mx={mx}
          maxW={{ base: maxWbase, lg: maxWlg }}
          w={w}
          display="flex"
          flexDirection="column">
          <Box
            mt="20px"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="flex-start">
            <Box flex="1">
              <Text
                mt="20px"
                mr="20px"
                pr="220px"
                color="gray.600"
                lineHeight="22px"
                fontSize="18px">
                Welcome to Trusted Habits – your premier destination for
                top-notch gloves at unbeatable prices! We take pride in offering
                a diverse range of gloves for every need – from DIY projects to
                heavy-duty tasks or reliable protection. At Trusted Habits,
                we're committed to excellence, providing high-quality gloves
                that combine affordability and performance. Our user-friendly
                platform ensures a seamless shopping experience, and our
                dedicated team is ready to assist you. Whether you're a
                professional or DIY enthusiast, Trusted Habits has you covered.
                Thank you for choosing us – we look forward to being part of
                your journey!
              </Text>
            </Box>

            <Box maxW="300px" maxH="300px" flex="1">
              <Image
                boxSize="100%"
                src="/images/product-4.png"
                alt="Gloves"
                objectFit="cover"
              />
            </Box>
          </Box>
        </Box>
        <Box bg="black" my="20px">
          <Heading my="10px" textAlign="center" color="white">
            Our Amazing Team
          </Heading>
          <Text my="10px" textAlign="center" color="white" fontSize="14px">
            Meet the incredible individuals who make up our team. Their
            dedication and expertise drive our success.
          </Text>

          <Flex justify="center" align="center">
            {teamMemberInfo.map((info, index) => (
              <TeamMemberCard
                key={index}
                name={info.name}
                title={info.title}
                imageSrc={info.imageSrc}
              />
            ))}
          </Flex>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default About;
