import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignUpWithEmailWithPassword from "../../hooks/useSignUpWithEmailWithPassword";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignUpWithEmailWithPassword();
  const handleInputChange = (event) => {
    setInputs((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    }
    )
  }
  const handleShowPasswordClick = () => {
    setShowPassword((prev) => !prev);
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
        placeholder="Username"
        type='text'
        bg={'gray.700'}
        value={inputs.username}
        name='username'
        onChange={handleInputChange}
        size="sm"
      />
      <Input
        placeholder="Full name"
        type='text'
        bg={'gray.700'}
        value={inputs.fullName}
        name='fullName'
        onChange={handleInputChange}
        size="sm"
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          bg={'gray.700'}
          value={inputs.password}
          name='password'
          onChange={handleInputChange}
          size="sm"
        />
        <InputRightElement h="full">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShowPasswordClick}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* 
      <Input
        placeholder="Confirm Password"
        type='password'
        bg={'gray.700'}
        value={inputs.confirmPassword}
        name='confirmPassword'
        onChange={handleInputChange}
      /> */}
      {
        error && (
          <Alert status="error" p={2} borderRadius={4}>
            <AlertIcon />
            {error.message}
          </Alert>
        )
      }
      <Button
        w={'full'}
        colorScheme='blue'
        size={'sm'}
        onClick={() => signup(inputs)}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </>
  )
}

export default SignUp;