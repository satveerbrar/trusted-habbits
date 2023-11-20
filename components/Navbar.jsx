import { Flex, Link, HStack, Spacer, Icon, Image, Box } from "@chakra-ui/react";
import { CommonButton } from "@/components/CommonButton";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = ({ mx, maxW, w }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingY="5"
      color="black"
      mx={mx}
      maxW={maxW}
      w={w}>
      <Link href="/">
        <Box>
          <Image src="/images/logo.svg" alt="logo" />
        </Box>
      </Link>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <HStack
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize="18px"
        fontWeight="medium">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </HStack>
      <Spacer />
      <CommonButton
        text="LOGIN"
        size="sm"
        fontSize="xs"
        borderRadius="2xl"
        mr="1rem"
      />
      <HStack spacing={2}>
        <Icon as={FaShoppingCart} boxSize={6} />
      </HStack>
    </Flex>
  );
};
