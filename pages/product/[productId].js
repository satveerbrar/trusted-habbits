import {
  Flex,
  Box,
  Heading,
  HStack,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

import { CommonButton } from "@/components/CommonButton"
import { globalPageStyles } from "@/utils/staticData"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { tempProductsData } from "@/utils/temporary"
import { ImageSlider } from "@/components/ImageSlider"

const ProductPage = ({ product }) => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex bg="white">
        <Box mx={mx} maxW={{ base: maxWbase, lg: maxWlg }} w={w}>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            p="100px"
          >
            <Box flex="1" pr="30px">
              <ImageSlider images={product.imageSrc} />
            </Box>
            <Box flex="1">
              <Heading as="h1" size="xl" mb="20px">
                {product.name}
              </Heading>
              <HStack mb="20px">
                <Text fontSize="lg" fontWeight="bold" color="red">
                  ${product.discountedPrice}
                </Text>
                <Text fontSize="lg" textDecoration="line-through" opacity="0.7">
                  ${product.price}
                </Text>
              </HStack>
              <Text mb="10px">Quantity</Text>
              <NumberInput
                defaultValue={1}
                min={1}
                max={200}
                width="80px"
                mb="20px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <CommonButton
                text="Add to Cart"
                size="lg"
                fontSize="sm"
                borderRadius="md"
                mb="10px"
              />
              <Divider orientation="horizontal" borderColor="black" w="100%" />
              <Heading as="h2" size="sm" my="20px">
                About this Item
              </Heading>
              <Box mb="20px">
                <UnorderedList>
                  {product.description.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.params

  // Replace tempProductsData with fetch from the database in the future
  const product = tempProductsData.find(
    (product) => product.id === parseInt(productId),
  )

  return {
    props: {
      product: product || null,
    },
  }
}

export default ProductPage
