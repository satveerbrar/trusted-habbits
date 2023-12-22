import { Button } from "@chakra-ui/react"
import { brandColors } from "@/src/utils/staticData"

export const CommonButton = ({ text, ...rest }) => {
  return (
    <Button
      bg={brandColors.primary}
      color="white"
      borderRadius="md"
      border="1px solid"
      borderColor="black"
      _hover={{ bg: brandColors.primaryDark }}
      {...rest}
    >
      {text}
    </Button>
  )
}
