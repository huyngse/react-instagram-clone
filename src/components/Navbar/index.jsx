import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Container maxW="container.lg" my={4}>
            <Flex
                w="full"
                justifyContent={{ base: "center", sm: "space-between" }}
                alignItems="center"
            >
                <Text fontSize='5xl' my={2} fontFamily={'Brush Script MT'} cursor={'pointer'}>Instagram</Text>

                <Flex gap={4}>
                    <Link to='/auth'>
                        <Button colorScheme="blue" size="sm">
                            Login
                        </Button>
                    </Link>
                    <Link to='/auth'>
                        <Button variant="outline" size="sm">
                            Sign up
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Navbar;