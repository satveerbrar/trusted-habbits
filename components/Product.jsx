import { Box, Image, Heading, Text, Link } from "@chakra-ui/react"

export const Product = ({
  _id,
  name,
  imageSrc,
  price,
  description,
  discountedPrice,
}) => {
  return (
    <Link href={`/product/${_id}`} style={{ textDecoration: "none" }}>
      <Box
        bg="white"
        width={{ base: "300px", md: "280px", lg: "320px" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        p="10px"
        margin="10px"
        textAlign="center"
      >
        <Box>
          <Image
            src={`/images/${imageSrc[0]}`}
            alt={name}
            maxH="250px"
            objectFit="cover"
          />
        </Box>

        <Box>
          <Heading as="h3" size="sm" mt="10px">
            {name}
          </Heading>
          <Text color="gray.600" fontSize="xs" mt="10px" mx="5px">
            {description[0]}
          </Text>

          <Box display="flex" flexDirection="row" justifyContent="space-around">
            <Text fontWeight="bold" mt="10px" color="red" fontSize="16px">
              ${discountedPrice.toFixed(2)}
            </Text>
            <Text
              fontWeight="bold"
              mt="10px"
              color="black"
              fontSize="16px"
              textDecoration="line-through"
              opacity={0.7}
            >
              ${price.toFixed(2)}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
