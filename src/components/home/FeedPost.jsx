import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { timeAgo } from "../../utils/timeAgo";
const PostHeader = ({ post, creatorProfile }) => {
    if (!creatorProfile) return;
    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            p={2}
        >
            <Flex gap={2} alignItems="center"  >
                <Avatar
                    src={creatorProfile.profilePicURL}
                    alt={`${creatorProfile.username}'s profile picture`}
                    size="sm"
                    name={creatorProfile.fullName}
                />
                <Text fontWeight="bold">
                    {creatorProfile.username}
                </Text>
                <Text color="gray.500">
                    • {timeAgo(post.createdAt)}
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
const FeedPost = ({ post }) => {
    const { userProfile } = useGetUserProfileById(post.createdBy);
    return (
        <Box borderRadius={5} mb={3}>
            <PostHeader post={post} creatorProfile={userProfile} />
            <Box>
                <Image src={post.imageURL} alt="feed post image" borderRadius={5} />
            </Box>
            {/* <PostFooter username={props.username} /> */}
        </Box>
    )
}

export default FeedPost