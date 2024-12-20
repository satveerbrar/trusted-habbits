import { Flex, Box } from "@chakra-ui/react"
import { globalPageStyles } from "@/src/utils/staticData"
import { Product } from "./Product"
import { Sidebar } from "./Sidebar"
import PropTypes from "prop-types"

export const Products = ({ productsData }) => {
  const { mx, maxWbase, maxWlg, w } = globalPageStyles
  return (
    <Flex>
      <Box bg="white">
        <Box
          mx={mx}
          maxW={{ base: maxWbase, lg: maxWlg }}
          w={w}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Sidebar />
          </Box>

          <Box
            pt="87px"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            {productsData.map((productData) => (
              <Product key={productData._id} {...productData} />
            ))}
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

Products.propTypes = {
  productsData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageSrc: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      discountedPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
}
