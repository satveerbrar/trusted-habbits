import { Box, Text, Icon, Avatar, Flex } from "@chakra-ui/react"
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa"

export const DetailedReview = ({
  name,
  rating,
  comment,
  avatarUrl,
  postedOn,
}) => {
  const originalPostedOn = new Date(postedOn)
  const formattedPostedOn = originalPostedOn.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          as={FaStar}
          color={i <= rating ? "yellow.500" : "gray.300"}
        />,
      )
    }
    return stars
  }

  return (
    <Box
      color="black"
      p="15px"
      borderWidth="1px"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Avatar
          src={`/images/${avatarUrl}`}
          name={name}
          size="sm"
          bg="green.400"
        />
        <Box mt="5px" ml="5px">
          {renderStars()}
          <Text fontSize="8px" color="gray.500">
            {formattedPostedOn} via Google
          </Text>
        </Box>
      </Box>
      <Box mt="20px">
        <Text>{comment}</Text>
      </Box>
      <Flex alignItems="center" mt="20px">
        <Box alignItems="center">
          <Icon as={FaThumbsUp} color="gray.400" cursor="pointer" />
          <Text as="span" ml="2" fontSize="12px">
            30
          </Text>
        </Box>
        <Box ml="10px" alignItems="center">
          <Icon as={FaThumbsDown} color="gray.400" cursor="pointer" />
          <Text as="span" ml="2" fontSize="12px">
            1
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
