import { Avatar, Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";
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
        <Box padding={2} >
            <Flex fontSize={25} gap={3} py={1}>
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

        </Box>
    )
}
const PostHeader = (props) => {
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            p={2}
        >

            <Flex gap={2} alignItems="center"  >
                <Avatar src={props.avatar} alt={`${props.username}'s profile picture`} size="sm" />
                <Text fontWeight="bold">
                    {props.username}
                </Text>
                <Text color="gray.500">
                    • 1w
                </Text>
            </Flex>
            <Box cursor="pointer">
                <Text
                    color="blue.500"
                    fontWeight="bold"
                    _hover={{ color: "white" }}
                    transition="0.2s"
                >
                    Unfollow
                </Text>
            </Box>
        </Flex>
    )
}
const FeedPost = (props) => {

    return (
        <Box>
            <Box fontSize={12} bg="gray.800" borderRadius={5} mb={3}>
                <PostHeader username={props.username} avatar={props.avatar} />
                <Box>
                    <Image src={props.img} alt="postpic" borderRadius={5} />
                </Box>
                <PostFooter username={props.username} />
            </Box>
            <Box>
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
        </Box>

    )
}

export default FeedPost