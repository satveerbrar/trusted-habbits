import { Box, Text, Avatar } from "@chakra-ui/react"
import { renderStars } from "@/src/controllers/util"
import PropTypes from "prop-types"

export const Review = ({ name, rating, comment, avatarUrl, postedOn }) => {
  const originalPostedOn = new Date(postedOn)
  const formattedPostedOn = originalPostedOn.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })

  return (
    <Box
      bg="#F3F4F6"
      color="black"
      p={4}
      borderWidth="1px"
      borderRadius="xl"
      width="220px"
      height="310px"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
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
          {renderStars(rating)}
          <Text fontSize="8px" color="blue.900">
            {" "}
            {formattedPostedOn} via Google
          </Text>
        </Box>
      </Box>
      <Box textAlign="center" mt="30px">
        <Text>{comment}</Text>
      </Box>
    </Box>
  )
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  postedOn: PropTypes.string.isRequired,
}
