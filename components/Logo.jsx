import { Link, Box, Image } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Link href="/">
      <Box>
        <Image src="/images/logo.svg" alt="logo" />
      </Box>
    </Link>
  );
};
