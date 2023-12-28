import { Flex, Divider } from "@chakra-ui/react"

import { globalPageStyles } from "@/src/utils/staticData"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { getProducts } from "@/src/controllers/product"
import { DetailedProduct } from "@/src/components/Product"
import { ErrorText } from "@/src/components/ErrorText"

const ProductPage = ({ product, error }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      {error ? (
        <ErrorText error={error} />
      ) : (
        <DetailedProduct product={product} />
      )}

      <Footer />
    </Flex>
  )
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.params
    const product = await getProducts(id)

    return {
      props: {
        product: product || null,
      },
    }
  } catch (error) {
    console.error("Failed to fetch product:", error)
    return {
      props: {
        product: null,
        error: "Sorry server down please check back later",
      },
    }
  }
}

export default ProductPage
