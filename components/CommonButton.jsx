import { Button } from "@chakra-ui/react";

export const CommonButton = ({ text, ...rest }) => {
  const brandColors = {
    primary: "#ED9B0D",
    primaryDark: "#D58B0B",
  };
  return (
    <Button
      bg={brandColors.primary}
      color="white"
      borderRadius="md"
      border="1px solid"
      borderColor="black"
      _hover={{ bg: brandColors.primaryDark }}
      {...rest}>
      {text}
    </Button>
  );
};
