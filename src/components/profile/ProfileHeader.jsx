import { Avatar, AvatarGroup, Button, Flex, Text } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";

const ProfileHeader = () => {
    const { userProfile } = useUserProfileStore();
    return (
        <Flex
            my="50px"
            px={{ base: 5, md: 10 }}
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 5 }}
            w="full"
        >
            <AvatarGroup
                size={{ base: "xl", md: "2xl" }}
            >
                <Avatar
                    src={userProfile.profilePicURL}
                    alt="profile picture"
                    name={userProfile.fullName}
                />
            </AvatarGroup>

            <Flex
                flexDirection="column"
                gap={1}
                w="full"
            >
                <Flex
                    alignItems="center"
                    gap={3}
                    flexDirection={{ base: "column", md: "row" }}
                    mb={2}
                >
                    <Text fontSize="25px">{userProfile.username}</Text>
                    <Button
                        size="sm"
                        bg="white"
                        color="black"
                        _hover={{ bg: "lightgray" }}
                    >
                        Edit Profile
                    </Button>
                </Flex>
                <Flex gap={5}>
                    <div>
                        <Text as="span" fontWeight="bold">{userProfile.posts.length}</Text> Posts
                    </div>
                    <div>
                        <Text as="span" fontWeight="bold">{userProfile.followers.length}</Text> Followers
                    </div>
                    <div>
                        <Text as="span" fontWeight="bold">{userProfile.following.length}</Text> Following
                    </div>
                </Flex>
                <Text fontWeight="bold">{userProfile.fullName}</Text>
                <Text>{userProfile.bio}</Text>
            </Flex>
        </Flex>
    )
}
export default ProfileHeader;