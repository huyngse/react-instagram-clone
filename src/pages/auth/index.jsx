import { Box, Flex, Image, VStack, Input, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Container
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleInputChange = (event) => {
        setInput((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        }
        )
    }
    const handleAuth = () => {
        if (input.email && input.password && (isLogin || input.confirmPassword)) {
            navigate('/');
        } else {
            alert('Please fill all the fields');
        }
    }
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
                    <Input
                        placeholder="Email"
                        type='email'
                        bg={'gray.700'}
                        value={input.email}
                        name='email'
                        onChange={handleInputChange}
                    />
                    <Input
                        placeholder="Password"
                        type='password'
                        bg={'gray.700'}
                        value={input.password}
                        name='password'
                        onChange={handleInputChange}
                    />
                    {
                        !isLogin &&
                        <Input
                            placeholder="Confirm Password"
                            type='password'
                            bg={'gray.700'}
                            value={input.confirmPassword}
                            name='confirmPassword'
                            onChange={handleInputChange}
                        />
                    }
                    <Button
                        onClick={handleAuth}
                        w={'full'}
                        colorScheme='blue'
                        size={'sm'}
                    >
                        {
                            !isLogin ?
                                "Sign Up" : "Login"
                        }
                    </Button>
                    <Flex alignItems={'center'} my={4} gap={2} w={'full'}>
                        <Box border={'1px solid grey'} flex={1} />
                        <Text>OR</Text>
                        <Box border={'1px solid grey'} flex={1} />
                    </Flex>
                    <Flex alignItems={'center'} gap={2} cursor={'pointer'}>
                        <Image src='./assets/google.png' h={5} alt='goole logo' />
                        <Text color={'blue.500'}>
                            Log in with Google
                        </Text>
                    </Flex>
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
const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} gap={10}>
            {/* <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}> */}
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
            {/* </Flex>
            </Container> */}
        </Flex>
    )
}

export default AuthPage