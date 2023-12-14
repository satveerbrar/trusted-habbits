import { Box, VStack, HStack, Text, Button, Divider } from "@chakra-ui/react"
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa"
import { CommonButton } from "../CommonButton"
export const Checkout = () => {
  return (
    <Box
      p="15px"
      borderRadius="md"
      shadow="md"
      width={{ base: "full", md: "250px" }}
      maxW="sm"
      bg="white"
    >
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Order Summary
      </Text>

      <VStack alignItems="stretch" spacing="3">
        <HStack justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text fontWeight="semibold">$5,345</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Estimated Shipping</Text>
          <Text fontWeight="semibold">$30</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Estimated Total</Text>
          <Text fontWeight="semibold">$5,375</Text>
        </HStack>
      </VStack>

      <CommonButton
        text="Checkout"
        fontSize="lg"
        borderRadius="md"
        mt="20px"
        h="40px"
        w="100%"
      />

      <Divider my="6" />

      <HStack justifyContent="center" spacing="4">
        <FaCcVisa color="#1A1F71" size="24px" />
        <FaCcMastercard color="#EB001B" size="24px" />
        <FaCcAmex color="#2D2F92" size="24px" />
        <FaCcPaypal color="#003087" size="24px" />
      </HStack>
    </Box>
  )
}
