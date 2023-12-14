import React from "react"
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

export const CartItem = ({ item }) => {
  const { name, price, size, imageUrl } = item
  return (
    <Flex
      p="15px"
      mb="20px"
      width="100%"
      shadow="sm"
      borderRadius="sm"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image borderRadius="md" boxSize="100px" src={imageUrl} alt={name} />
      <Box flex="1" ml={4}>
        <Text fontWeight="bold">{name}</Text>
        <Text fontWeight="semibold">{price}</Text>
        <Text fontSize="sm">Size: {size}</Text>
      </Box>
      <Flex direction="row" align="center">
        <NumberInput defaultValue={1} min={1} max={200} width="80px" mr="10px">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <IconButton aria-label="Remove item" icon={<CloseIcon />} />
      </Flex>
    </Flex>
  )
}
