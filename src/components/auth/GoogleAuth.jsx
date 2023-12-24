import { Flex, Image, Text } from "@chakra-ui/react"

const GoogleAuth = () => {
  return (
    <Flex alignItems={'center'} gap={2} cursor={'pointer'}>
      <Image src='./assets/google.png' h={5} alt='goole logo' />
      <Text color={'blue.500'}>
        Log in with Google
      </Text>
    </Flex>
  )
}

export default GoogleAuth