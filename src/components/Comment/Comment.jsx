import { Avatar, Box, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
const Comment = ({ comment }) => {
  const { isLoading, userProfile } = useGetUserProfileById(comment.createdBy);
  if (isLoading) return <CommentSkeleton />
  return (
    <Flex
      w="full"
      fontSize="12px"
      gap={2}
    >
      <Link to={`/u/${userProfile.username}`}>
        <Avatar
          src={userProfile.profilePicURL}
          name={userProfile.fullName}
          alt="Comment avatar"
          size="sm"
        />
      </Link>
      <Box>
        <Flex gap={2}>
          <Link to={`/u/${userProfile.username}`}>
            <Text fontWeight="bold">{userProfile.username}</Text>
          </Link>
          <Text color="gray">{timeAgo(comment.createdAt)}</Text>
        </Flex>
        <Text >{comment.comment}</Text>
      </Box>
    </Flex>
  )
}

export default Comment;
const CommentSkeleton = () => {
  return (
    <Flex gap={4} w="full" alignItems="center">
      <SkeletonCircle h={10} w={10} />
      <Flex gap={1} flexDirection="column">
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  )
}