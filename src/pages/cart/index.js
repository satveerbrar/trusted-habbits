import { Flex, Divider } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { globalPageStyles } from "@/src/utils/staticData"
import { Cart } from "@/src/components/Cart"
import { getCart } from "@/src/controllers/cart"
import { getSession } from "next-auth/react"
import { ErrorText } from "@/src/components/ErrorText"

const products = ({ cartData, error }) => {
  const { bg } = globalPageStyles
  const { items } = cartData ? cartData : { items: [] }
  return (
    <Flex direction="column" bg={bg} minH="100vh">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      {error ? <ErrorText error={error} /> : <Cart items={items} />}
      <Footer />
    </Flex>
  )
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    if (!session || !session.user) {
      throw new Error("User not authenticated")
    }
    const userId = session.user.id
    const cartData = await getCart(userId)

    return {
      props: {
        cartData: cartData,
      },
    }
  } catch (error) {
    return {
      props: {
        cartData: null,
        error: error.message || "An error occured while fetching cart data",
      },
    }
  }
}

export default products
