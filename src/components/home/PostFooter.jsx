import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";

const PostFooter = (props) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);
    const handleLikeClick = () => {
        setLiked(prev => {
            if (liked) {
                setLikes(likes - 1);
            } else {
                setLikes(likes + 1);
            }
            return !prev;
        })
    }
    return (
        <Box padding={2} fontSize={14} >
            <Flex gap={3} py={1} fontSize={25}>
                <Box
                    onClick={handleLikeClick}
                    cursor="pointer"
                >
                    {liked ? <FaHeart color="red" /> : <FaRegHeart />}
                </Box>
                <Box cursor="pointer">
                    <IoChatbubbleOutline />
                </Box>
            </Flex>
            <Text py={1} fontWeight={600}>
                {likes} likes
            </Text>
            {
                !props.isProfilePage && (
                    <>
                        <Flex gap={2}>
                            <Text py={1} fontWeight={700}>
                                {props.username}
                            </Text>
                            <Text py={1} fontWeight={500}>
                                Feeling good
                            </Text>
                        </Flex>
                        <Text py={1} color='gray'>
                            View all 10 comment
                        </Text>
                    </>

                )
            }
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
        </Box>
    )
}
export default PostFooter;