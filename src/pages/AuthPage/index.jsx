import { Box, Container, Flex } from '@chakra-ui/react'
const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                {/* LEFT HAND SIDE */}
                <Box display={{ base: "none", md: "block" }}>

                </Box>
            </Container>
        </Flex>
    )
}

export default AuthPage