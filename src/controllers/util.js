import { Icon } from "@chakra-ui/react"
import { FaStar } from "react-icons/fa"

export const renderStars = (rating) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Icon
        mx="1px"
        key={i}
        as={FaStar}
        color={i <= rating ? "yellow.500" : "gray.300"}
      />,
    )
  }
  return stars
}
