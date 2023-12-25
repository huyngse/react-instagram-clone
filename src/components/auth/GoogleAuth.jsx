import { Flex, Image, Text } from "@chakra-ui/react";
import useGoogleAuth from "../../hooks/useGoogleAuth";
const GoogleAuth = (props) => {
  const { signIn } = useGoogleAuth();
  return (
    <Flex alignItems={'center'} gap={2} cursor={'pointer'} onClick={signIn}>
      <Image src='./assets/google.png' h={5} alt='google logo' />
      <Text color={'blue.500'}>
        {
          props.isSignUp ? "Sign up with Google" : "Log in with Google"
        }
      </Text>
    </Flex>
  )
}

export default GoogleAuth