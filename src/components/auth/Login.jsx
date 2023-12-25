import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
const Login = () => {
    const { login, loading } = useLogin();
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
                onClick={() => login(inputs)}
                isLoading={loading}
            >
              Log in
            </Button>
        </>
    )
}

export default Login;