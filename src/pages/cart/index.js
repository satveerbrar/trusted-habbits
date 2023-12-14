import { Flex, Divider } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { globalPageStyles } from "@/src/utils/staticData"
import { Cart } from "@/src/components/Cart"

const products = ({ cartData }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} minH="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Cart cartData={cartData} />
      <Footer />
    </Flex>
  )
}

export async function getStaticProps() {
  const mockCartItems = [
    {
      id: "1",
      name: "Product 1",
      price: 19.99,
      quantity: 2,
      size: "L",
      imageUrl: "images/product-1.png",
    },
    {
      id: "2",
      name: "Product 2",
      price: 29.99,
      quantity: 1,
      size: "M",
      imageUrl: "images/product-2.png",
    },
    {
      id: "3",
      name: "Product 3",
      price: 39.99,
      quantity: 3,
      size: "M",
      imageUrl: "images/product-3.png",
    },
  ]
  const cartData = mockCartItems

  return {
    props: {
      cartData: cartData,
    },
  }
}

export default products
