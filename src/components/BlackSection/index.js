import PropTypes from "prop-types"
import { Box, Flex } from "@chakra-ui/react"
import { Card } from "./Card"
import { cardsInfo } from "@/src/utils/staticData"

export const BlackSection = ({ cardCount, globalPageStyles }) => {
  const { mx, maxWbase, maxWlg, w } = globalPageStyles

  const generateCards = () => {
    const cards = []
    for (let i = 0; i < cardCount; i++) {
      cards.push(
        <Box
          key={i}
          flex={{ base: "1 1 40%", md: "1 1 10%" }}
          position="relative"
          bottom={{ base: "-50px", sm: "-50px", md: "-70px", lg: "-100px" }}
          height={{ base: "200px", sm: "200px", md: "180px", lg: "320px" }}
          mx={{ base: "5px", sm: "5px", md: "10px", lg: "20px" }}
          marginBottom="10px"
        >
          <Card cardInfo={cardsInfo[i]} />
        </Box>,
      )
    }
    return cards
  }

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
        mx={mx}
        maxW={{ base: maxWbase, lg: maxWlg }}
        w={w}
      >
        {generateCards()}
      </Flex>
    </Box>
  )
}

BlackSection.propTypes = {
  cardCount: PropTypes.number.isRequired,
}
