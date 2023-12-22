import { Box, Heading, Grid, GridItem } from "@chakra-ui/react"

import { InfoCard } from "./InfoCard"
import { chooseUsInfo, globalPageStyles } from "@/src/utils/staticData"

export const ChooseUs = () => {
  const { mx, maxWbase, maxWlg, w } = globalPageStyles
  return (
    <Box bg="white">
      <Box
        mx={mx}
        maxW={{ base: maxWbase, lg: maxWlg }}
        w={w}
        mt="180px"
        mb="20px"
      >
        <Heading
          as="h2"
          fontSize="40px"
          align="center"
          marginY="30px"
          fontWeight="600"
          color="black"
        >
          Why Choose Us
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(6, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {chooseUsInfo.map((info) => (
            <GridItem key={info.number} colSpan={{ base: 6, md: 1, lg: 1 }}>
              <InfoCard {...info} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
