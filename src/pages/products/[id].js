import { Flex, Divider } from "@chakra-ui/react"

import { globalPageStyles } from "@/src/utils/staticData"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { getProducts } from "@/src/controllers/product"
import { DetailedProduct } from "@/src/components/Product"

const ProductPage = ({ product }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <DetailedProduct product={product} />
      <Footer />
    </Flex>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const product = await getProducts(id)

  return {
    props: {
      product: product || null,
    },
  }
}

export default ProductPage
