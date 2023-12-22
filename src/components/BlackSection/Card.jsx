import { Box, Text, Image } from "@chakra-ui/react"

export const Card = ({ cardInfo }) => {
  const { text, imageSrc, alt } = cardInfo
  return (
    <Box
      mx="auto"
      maxW="100%"
      w="100%"
      height="100%"
      borderWidth="1px"
      borderBottomLeftRadius="xl"
      borderBottomRightRadius="xl"
      overflow="hidden"
      boxShadow="md"
      position="relative"
    >
      <Box height="83%">
        <Image
          boxSize="100%"
          objectFit="cover"
          src={`/images/${imageSrc}`}
          alt={alt}
        />
      </Box>

      <Box
        p={{ base: "2", md: "1", lg: "4" }}
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="17%"
        bg="#D9D9D9"
      >
        <Text
          fontWeight="bold"
          align="center"
          color="black"
          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
        >
          {text}
        </Text>
      </Box>
    </Box>
  )
}
