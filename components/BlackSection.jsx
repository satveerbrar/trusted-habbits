import PropTypes from "prop-types";
import { Box, Flex } from "@chakra-ui/react";
import { Card } from "./Card";

export const BlackSection = ({ cardCount }) => {
  const cardsInfo = [
    {
      text: "Medical Gloves",
      imageSrc: "medical-gloves.jpg",
      alt: "Medical Gloves",
    },
    {
      text: "Warehouse Gloves",
      imageSrc: "warehouse-gloves.jpg",
      alt: "Warehouse Gloves",
    },
    {
      text: " Construction Gloves",
      imageSrc: "construction-gloves.jpg",
      alt: "Construction Gloves",
    },
    {
      text: "Mechanic Gloves",
      imageSrc: "mechanic-gloves.jpg",
      alt: "Mechanic Gloves",
    },
  ];

  const generateCards = () => {
    const cards = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push(
        <Box
          key={i}
          flex={{ base: "1 1 40%", md: "1 1 10%" }}
          position="relative"
          bottom={{ base: "-50px", sm: "-50px", md: "-70px", lg: "-100px" }}
          height={{ base: "200px", sm: "200px", md: "180px", lg: "320px" }}
          mx={{ base: "10px", sm: "10px", md: "30px", lg: "60px" }}
          marginBottom="10px">
          <Card cardInfo={cardsInfo[i]} />
        </Box>
      );
    }
    return cards;
  };

  return (
    <Box bg="black" marginTop="50px">
      <Flex
        direction="row"
        flexWrap="wrap"
        align="center"
        justify="flex-start"
        alignItems="center"
        color="white"
        overflow="visible"
        position="relative"
        mx="auto"
        maxW="90%"
        w="100%">
        {generateCards()}
      </Flex>
    </Box>
  );
};

BlackSection.propTypes = {
  cardCount: PropTypes.number.isRequired,
};
