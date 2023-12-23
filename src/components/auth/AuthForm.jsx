import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./login";
import Signup from "./SignUp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
            <Box
                // border={"1px solid white"}
                borderRadius={10}
                padding={5}
                bg={'gray.800'}
            >
                <VStack spacing={4}>
                    {/* <Image src="/assets/logo.png" h={24} alt='instagram logo' cursor={'pointer'} /> */}
                    <Text fontSize='5xl' my={2} fontFamily={'Brush Script MT'} cursor={'pointer'}>Instagram</Text>
                    {
                        isLogin ? <Login /> : <Signup />
                    }

                    <Flex alignItems={'center'} my={4} gap={2} w={'full'}>
                        <Box border={'1px solid grey'} flex={1} />
                        <Text>OR</Text>
                        <Box border={'1px solid grey'} flex={1} />
                    </Flex>
                    <GoogleAuth />
                </VStack>
            </Box>
            <Box
                borderRadius={10}
                padding={5}
                bg={'gray.800'}
            >
                <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                    <Box>
                        {
                            isLogin ?
                                "Don't have an account?" :
                                "Already have an account?"
                        }
                    </Box>
                    <Box
                        color={'blue.500'}
                        onClick={
                            () => setIsLogin((prev) => !prev)
                        }
                        cursor={'pointer'}
                    >
                        {
                            isLogin ?
                                "Sign up" :
                                "Login"
                        }
                    </Box>
                </Flex >
            </Box >
        </>
    )
}
export default AuthForm;