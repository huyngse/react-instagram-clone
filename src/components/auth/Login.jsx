import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const handleInputChange = (event) => {
        setInputs((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        }
        )
    }

    return (
        <>
            <Input
                placeholder="Email"
                type='email'
                bg={'gray.700'}
                value={inputs.email}
                name='email'
                onChange={handleInputChange}
                size="sm"
            />
            <Input
                placeholder="Password"
                type='password'
                bg={'gray.700'}
                value={inputs.password}
                name='password'
                onChange={handleInputChange}
                size="sm"
            />
            <Button
                w={'full'}
                colorScheme='blue'
                size={'sm'}
            >
              Log in
            </Button>
        </>
    )
}

export default Login;