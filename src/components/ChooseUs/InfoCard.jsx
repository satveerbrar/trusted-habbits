import { Box, Heading, Text } from "@chakra-ui/react"

export const InfoCard = ({ number, title, description, color }) => {
  return (
    <Box
      p={6}
      bg={color}
      textAlign="left"
      borderRadius="2xl"
      boxShadow="lg"
      width={{ base: "100%", md: "320px" }}
      height="380px"
    >
      <Heading
        as="h1"
        my="10px"
        fontSize="40px"
        color="green.600"
        fontWeight="300"
        letterSpacing="3px"
      >
        {number}
      </Heading>
      <Heading as="h2" fontSize="20px" mt="35px" fontWeight="600" color="black">
        {title}
      </Heading>
      <Text
        mt="20px"
        lineHeight="1.8"
        fontSize="18px"
        fontWeight="400"
        color="black.100"
      >
        {description}
      </Text>
    </Box>
  )
}
