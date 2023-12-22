import { Flex, Divider } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { globalPageStyles } from "@/src/utils/staticData"
import { Cart } from "@/src/components/Cart"
import { getCart } from "@/src/controllers/cart"
import { getSession } from "next-auth/react"

const products = ({ cartData }) => {
  const { bg } = globalPageStyles
  const { items } = cartData
  return (
    <Flex direction="column" bg={bg} minH="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Cart items={items} />
      <Footer />
    </Flex>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const userId = session.user.id
  const cartData = await getCart(userId)

  return {
    props: {
      cartData: cartData,
    },
  }
}

export default products
