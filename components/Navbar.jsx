import { useState } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

import {
  Flex,
  Link,
  HStack,
  Spacer,
  Icon,
  Box,
  VStack,
} from "@chakra-ui/react";
import { CommonButton } from "@/components/CommonButton";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";

export const Navbar = ({ bg, mx, maxWbase, maxWlg, w }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginClick = () => {
    router.push("/auth/signIn");
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingY="5"
      color="black"
      mx={mx}
      maxW={{ base: maxWbase, lg: maxWlg }}
      w={w}>
      <Logo />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />

      {/* Hamburger Icon for Mobile */}
      <Box display={{ base: "block", md: "none" }} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Box>

      {isMobileMenuOpen && (
        <VStack
          position="fixed"
          bg={bg}
          top="70px"
          left="0"
          right="0"
          bottom="0"
          zIndex="10"
          boxShadow="md"
          spacing={4}
          p={4}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
          <Link href="/contact">
            <Icon as={FaShoppingCart} boxSize={6} />
          </Link>
        </VStack>
      )}

      <HStack
        spacing={8}
        display={{ base: "none", md: "flex" }}
        fontSize="18px"
        fontWeight="medium">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </HStack>
      <Spacer />
      {session ? (
        <CommonButton
          text="LOGOUT"
          size="sm"
          fontSize="xs"
          bg="#a1332b"
          borderRadius="2xl"
          display={{ base: "none", md: "block" }}
          _hover={{ bg: "#8f221a" }}
          mr="1rem"
          onClick={handleLogoutClick}
        />
      ) : (
        <CommonButton
          text="LOGIN"
          size="sm"
          fontSize="xs"
          borderRadius="2xl"
          display={{ base: "none", md: "block" }}
          mr="1rem"
          onClick={handleLoginClick}
        />
      )}

      <HStack display={{ base: "none", md: "block" }} spacing={2}>
        <Icon as={FaShoppingCart} boxSize={6} />
      </HStack>
    </Flex>
  );
};
