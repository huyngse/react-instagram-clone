import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/auth/AuthForm';
const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} gap={10}>
            <Container maxW={"container.md"} padding={0}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                {/* LEFT HAND SIDE */}
                <Box display={{ base: "none", md: "block" }}>
                    <Image src="/assets/auth.png" h={650} alt='phone image' />
                </Box>

                {/* RIGHT HAND SIDE */}
                <VStack spacing={4} align={"stretch"} my={10}>

                    <AuthForm />
                    <Box textAlign={"center"}>
                        Get the app.
                    </Box>
                    <Flex gap={5} justifyContent={"center"}>
                        <Image src='./assets/playstore.png' h={10} alt='playstore' />
                        <Image src='./assets/microsoft.png' h={10} alt='microsoft' />
                    </Flex>
                </VStack>
            </Flex>
            </Container>
        </Flex>
    )
}

export default AuthPage