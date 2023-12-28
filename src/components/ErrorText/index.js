import { Box, Text } from "@chakra-ui/react"

export const ErrorText = ({ error }) => {
  return (
    <Box pt="20" textAlign="center" minH="65vh" bg="white">
      <Text color="red.500">{error}</Text>
    </Box>
  )
}
