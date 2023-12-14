import React from "react"
import { Box, Heading, Flex } from "@chakra-ui/react"
import { CartItem } from "./CartItem"
import { globalPageStyles } from "@/src/utils/staticData"
import { Checkout } from "./Checkout"

export const Cart = ({ cartData }) => {
  const { mx, maxWbase, maxWlg, w } = globalPageStyles
  return (
    <Box bg="white" minH="70vh">
      <Box mx={mx} maxW={{ base: maxWbase, lg: maxWlg }} w={w}>
        <Heading as="h1" size="md" mt="20px">
          YOUR CART
        </Heading>
        <Flex my="20px" flexDirection={{ base: "column", md: "row" }}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="40%"
          >
            {cartData.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Box>
          <Box ml={{ base: "0px", md: "100px" }}>
            <Checkout />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
