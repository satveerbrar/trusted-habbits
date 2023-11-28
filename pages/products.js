import { Flex, Box, Divider } from "@chakra-ui/react";

import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/Product";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { tempProductsData } from "@/utils/temporary";
import { globalPageStyles } from "@/utils/staticData";

const products = ({ productsData }) => {
  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles;

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex>
        <Box bg="white">
          <Box
            mx={mx}
            maxW={{ base: maxWbase, lg: maxWlg }}
            w={w}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}>
            <Box>
              <Sidebar />
            </Box>

            <Box
              pt="87px"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent={{ base: "center", lg: "flex-start" }}>
              {productsData.map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export async function getStaticProps() {
  // Replace tempProductData with fetch from database in future
  const productsData = tempProductsData;

  return {
    props: {
      productsData: productsData,
    },
  };
}

export default products;
