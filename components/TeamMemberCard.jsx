import { Box, Text, Avatar } from "@chakra-ui/react";

export const TeamMemberCard = ({ name, title, imageSrc }) => (
  <Box
    textAlign="center"
    px="40px"
    pt="20px"
    pb="30px"
    m="30px"
    bg="#161a1d"
    borderRadius="md"
    boxShadow="md"
    width="220px"
    height="260px">
    <Avatar size="2xl" name={name} src={imageSrc} mb="30px" />
    <Text fontWeight="600" fontSize="lg" color="white">
      {title}
    </Text>
    <Text fontSize="md" color="green.600">
      {name}
    </Text>
  </Box>
);
