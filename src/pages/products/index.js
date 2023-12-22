import { Flex, Divider } from "@chakra-ui/react"
import { Navbar } from "@/src/components/Navbar"
import { Footer } from "@/src/components/Footer"
import { globalPageStyles } from "@/src/utils/staticData"
import { getProducts } from "@/src/controllers/product"
import { Products } from "@/src/components/Products"

const products = ({ productsData }) => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Products productsData={productsData} />
      <Footer />
    </Flex>
  )
}

export async function getStaticProps() {
  const productsData = await getProducts()

  return {
    props: {
      productsData: productsData,
    },
  }
}

export default products
