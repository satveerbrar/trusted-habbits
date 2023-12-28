import { Flex, Divider, Box, Text } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { globalPageStyles } from "@/src/utils/staticData"
import { getProducts } from "@/src/controllers/product"
import { Products } from "@/src/components/Products"
import { ErrorText } from "@/src/components/ErrorText"

const products = ({ productsData, error }) => {
  const { bg } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      {error ? (
        <ErrorText error={error} />
      ) : (
        <Products productsData={productsData} />
      )}
      <Footer />
    </Flex>
  )
}

export async function getStaticProps() {
  try {
    const productsData = await getProducts()

    return {
      props: {
        productsData: productsData,
      },
    }
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return {
      props: {
        productsData: [],
        error: "Sorry server down please check back later",
      },
    }
  }
}

export default products
