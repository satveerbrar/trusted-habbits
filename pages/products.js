import { Flex, Box, Divider } from "@chakra-ui/react";

import { Navbar } from "@/components/Navbar";
import { Product } from "@/components/Product";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

const products = () => {
  const globalPageStyles = {
    bg: "#D9D9D9",
    mx: "auto",
    maxWbase: "90%",
    maxWlg: "65%",
    w: "100%",
  };

  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles;

  const productsData = [
    {
      name: "Sapphire Elegance Gloves",
      imageSrc: "product-1.png",
      price: 19.99,
      discountedPrice: 16.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Velvet Touch Gloves",
      imageSrc: "product-2.png",
      price: 39.99,
      discountedPrice: 33.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Radiant Charm Gloves",
      imageSrc: "product-3.png",
      price: 49.99,
      discountedPrice: 42.49,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Midnight Mirage Gloves",
      imageSrc: "product-4.png",
      price: 59.99,
      discountedPrice: 50.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Whispering Breeze Gloves",
      imageSrc: "product-5.png",
      price: 69.99,
      discountedPrice: 59.49,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Winter Bliss Gloves",
      imageSrc: "product-6.png",
      price: 29.99,
      discountedPrice: 25.49,
      description: "Keep your hands warm and cozy in these winter gloves.",
    },
    {
      name: "Velocity Sprint Gloves",
      imageSrc: "product-7.png",
      price: 34.99,
      discountedPrice: 29.74,
      description:
        "Perfect for sports activities, providing a comfortable grip.",
    },
    {
      name: "Mystic Aura Gloves",
      imageSrc: "product-8.png",
      price: 49.99,
      discountedPrice: 42.49,
      description: "Stay stylish with these elegant leather gloves.",
    },
    {
      name: "Guardian Shield Gloves",
      imageSrc: "product-9.png",
      price: 39.99,
      discountedPrice: 33.99,
      description:
        "Designed for safety at work, providing protection and comfort.",
    },
    {
      name: "Digital Harmony Gloves",
      imageSrc: "product-10.png",
      price: 24.99,
      discountedPrice: 21.24,
      description:
        "Stay connected on the go with these touchscreen-friendly gloves.",
    },
  ];

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
            flexDirection="row">
            <Sidebar />
            <Box
              p="100px"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between">
              {productsData.map((product, index) => (
                <Product key={index} {...product} />
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default products;
