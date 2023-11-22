import { Button } from "@chakra-ui/react";

export const CommonButton = ({ text, ...rest }) => {
  const brandColors = {
    primary: "#007665",
    primaryDark: "#0f6357",
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
