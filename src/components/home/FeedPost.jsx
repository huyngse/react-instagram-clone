import { Avatar, Box, Button, Flex, Image, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react"
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { timeAgo } from "../../utils/timeAgo";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
const PostHeader = ({ post, creatorProfile }) => {
    const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(creatorProfile?.uid);

    return (
        <Flex
            justifyContent="space-between"
            alignItems="center"
            p={2}
        >
            <Flex gap={2} alignItems="center"  >
                {/* PROFILE PICTURE */}
                {
                    creatorProfile ? (
                        <Link to={`/u/${creatorProfile.username}`}>
                            <Avatar
                                src={creatorProfile.profilePicURL}
                                alt={`${creatorProfile.username}'s profile picture`}
                                size="sm"
                                name={creatorProfile.fullName}
                            />
                        </Link>
                    ) : (
                        <SkeletonCircle size="10" />
                    )
                }
                {/* USERNAME */}
                {
                    creatorProfile ? (
                        <Link to={`/u/${creatorProfile.username}`}>
                            <Text fontWeight="bold">
                                {creatorProfile.username}
                            </Text>
                        </Link>
                    ) : (
                        <Skeleton w="100px" h="10px" />
                    )
                }
                <Text color="gray.500">
                    • {timeAgo(post.createdAt)}
                </Text>
            </Flex>
            <Button
                bg="transparent"
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: "white" }}
                transition="0.2s"
                size="sm"
                onClick={handleFollowUser}
                isLoading={isUpdating}
            >
                {
                    isFollowing ? "Unfollow" : "Follow"
                }
            </Button>
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
            <PostFooter username={userProfile?.username} post={post} />
        </Box>
    )
}

export default FeedPost