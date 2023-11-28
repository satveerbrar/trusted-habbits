import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  Flex,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { FaWhatsapp } from "react-icons/fa";

import { globalPageStyles } from "@/utils/staticData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CommonButton } from "@/components/CommonButton";
import { faqData } from "@/utils/staticData";
import { contactInfo } from "@/utils/staticData";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const { bg, mx, maxWbase, maxWlg, w } = globalPageStyles;
  const { email, phoneNumber, whatsAppNumber } = contactInfo;

  return (
    <Flex direction="column" bg={bg} height="auto">
      <Navbar {...globalPageStyles} />
      <Divider orientation="horizontal" borderColor="black" w="100%" />
      <Flex bg="white">
        <Box
          mx={mx}
          maxW={{ base: maxWbase, lg: maxWlg }}
          w={w}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}>
          <Box p={8}>
            {/* FAQ Section */}
            <Flex my="100px">
              <Box mr="100px">
                <Heading color="green.800" fontWeight="600" fontSize="50px">
                  Frequently Asked Questions
                </Heading>
              </Box>
              <Box>
                <Grid templateColumns="repeat(2, 1fr)" gap="30px">
                  {faqData.map((item, index) => (
                    <GridItem key={index}>
                      <Text
                        color="green.800"
                        fontWeight="600"
                        mb="10px"
                        fontSize="18px">
                        {item.question}
                      </Text>
                      <Text color="gray.700" fontSize="18px">
                        {item.answer}
                      </Text>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Flex>

            <Box bg="black" height="1px" mb="15px"></Box>

            {/* Form Section */}
            <Heading mb={4}>Contact Us</Heading>
            <Text mb={8}>
              Have questions or need assistance? We're here to help! Fill out
              the form below, and we'll get back to you as soon as possible.
            </Text>

            <form onSubmit={handleSubmit}>
              <Flex mb={4}>
                <FormControl id="firstName" mr={2} flex={1}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Your First Name" />
                </FormControl>

                <FormControl id="lastName" ml={2} flex={1}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Your Last Name" />
                </FormControl>
              </Flex>

              <FormControl id="email" mb={4}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>

              <FormControl id="message" mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" rows={4} />
              </FormControl>

              <CommonButton
                text="Submit"
                size="md"
                fontSize="sm"
                borderRadius="md"
                type="submit"
              />
            </form>

            <Text fontSize="sm" color="gray.600" my={4}>
              Prefer another method? Reach out to us via email at{" "}
              <Link href={`mailto:${email}`} color="blue.600">
                {email}
              </Link>{" "}
              or call us at{" "}
              <Link href={`tel:${phoneNumber}`} color="blue.600">
                {phoneNumber}
              </Link>{" "}
              or message us on
              {"   "}
              <Flex
                as="a"
                href={`https://wa.me/${whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                color="green.600"
                alignItems="baseline"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "baseline",
                }}>
                {"   "}
                <FaWhatsapp size="13px" style={{ marginRight: "4px" }} />
                WhatsApp
              </Flex>
              .
            </Text>

            <Text fontSize="sm" color="gray.600" mb={4}>
              Looking for quick answers? Check out our{" "}
              <Link href="/contact">FAQs</Link> or browse our{" "}
              <Link href="/blog">blog</Link> for the latest updates.
            </Text>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default Contact;
