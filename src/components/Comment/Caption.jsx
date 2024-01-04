import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({post}) => {
    const userProfile = useUserProfileStore(state => state.userProfile);
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
                    <Text color="gray">{timeAgo(post.createdAt)}</Text>
                </Flex>
                <Text >{post.caption} lorem</Text>
            </Box>
        </Flex>
    )
}

export default Caption;