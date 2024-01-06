import { Avatar, Button, Flex, Text } from "@chakra-ui/react"
import useFollowUser from "../../hooks/useFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
  const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(user.uid);
  const authUser = useAuthStore(state => state.user);
  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((uid) => uid !== authUser.uid)
        : [...user.followers, authUser.uid]
    })
  }
  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={3}>
        <Link to={`/u/${user.username}`}>
          <Avatar src={user.profilePicURL} name={user.fullName} size="md" />
        </Link>
        <div>
          <Link to={`/u/${user.username}`}>
            <Text fontWeight="bold">{user.fullName}</Text>
          </Link>
          <Text color="gray">{user.followers.length} followers</Text>
        </div>
      </Flex>
      {
        authUser.uid !== user.uid && (
          <Button
            size="sm"
            onClick={onFollowUser}
            color="blue.500"
            bg="transparent"
            _hover={{ color: "white" }}
            cursor="pointer"
            fontWeight="medium"
            isLoading={isUpdating}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )
      }

    </Flex>
  )
}

export default SuggestedUser