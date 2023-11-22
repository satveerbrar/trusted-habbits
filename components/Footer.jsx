import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Box,
  Link,
  Divider,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaTiktok,
  FaSnapchat,
  FaInstagram,
  FaFacebook,
  FaCopyright,
} from "react-icons/fa";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      paddingTop={{ base: "20px", md: "30px" }}>
      <Stack spacing={{ base: "4", md: "5" }} direction="column">
        <Stack justify="center" direction="row" align="center">
          <Logo />
        </Stack>
        <Stack justify="center" direction="row" align="center">
          <Text
            fontSize="sm"
            color="fg.subtle"
            lineHeight="1"
            display="flex"
            alignItems="center">
            Copright
            <Box as="span" ml={1} mr={1} display="inline-block" align="center">
              <FaCopyright />
            </Box>
            2023 Trusted Habbits, Ltd
          </Text>
        </Stack>
        <Stack justify="center" direction="row" align="center">
          <Link href="/privacy">Privacy</Link>
          <Divider orientation="vertical" borderColor="black" height="20px" />
          <Link href="/security">Security</Link>
          <Divider orientation="vertical" borderColor="black" height="20px" />
          <Link href="/report">Report</Link>
        </Stack>
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
              icon={<FaInstagram />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Tiktok"
              icon={<FaTiktok />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Snapchat"
              icon={<FaSnapchat />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
};
