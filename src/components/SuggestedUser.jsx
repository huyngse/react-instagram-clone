import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = (props) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followers, setFollower] = useState(props.followers);
  const handleFollowClick = () => {
    setIsFollowed(
      (prev) => {
        if (prev) {
          setFollower(followers - 1);
        } else {
          setFollower(followers + 1);
        }
        return !prev;
      }
    );
  };
  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={3}>
        <Avatar src={props.avatar} name={props.name} size="md" />
        <div>
          <Text fontWeight="bold">{props.name}</Text>
          <Text color="gray">{followers} followers</Text>
        </div>
      </Flex>

      <Box
        size="sm"
        onClick={handleFollowClick}
        color="blue.500"
        _hover={{color: "white"}}
        cursor="pointer"
        fontWeight="medium"
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Box>
    </Flex>
  )
}

export default SuggestedUser