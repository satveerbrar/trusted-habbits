import { signIn } from "next-auth/react"
import { Button, Flex, Heading } from "@chakra-ui/react"

const SignInPage = () => {
  const handleSignIn = async () => {
    await signIn("google")
  }

  return (
    <Flex align="center" justify="center" minH="100vh" bg="#D9D9D9">
      <Flex
        direction="column"
        p="40px"
        rounded={6}
        bg="white"
        w="500px"
        boxShadow="lg"
      >
        <Heading mb="30px" fontSize="20px" align="center">
          Sign in to Your Account
        </Heading>
        <Button
          colorScheme="teal"
          onClick={handleSignIn}
          _hover={{ bg: "teal.500" }}
        >
          Continue with Google
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignInPage
