import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import PostFooter from "./PostFooter"
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
        <Box  borderRadius={5} mb={3}>
            <PostHeader username={props.username} avatar={props.avatar} />
            <Box>
                <Image src={props.img} alt="postpic" borderRadius={5} />
            </Box>
            <PostFooter username={props.username} />
        </Box>
    )
}

export default FeedPost