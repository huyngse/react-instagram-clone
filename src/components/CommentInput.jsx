import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { GoPaperAirplane } from 'react-icons/go';

const CommentInput = () => {
    return (
        <InputGroup>
            <Input type='tel' placeholder='Comment' variant="flushed" />
            <InputRightElement >
                <Button
                    size='sm'
                    color="blue.500"
                    _hover={{ color: "white" }}
                >
                    <GoPaperAirplane />
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default CommentInput