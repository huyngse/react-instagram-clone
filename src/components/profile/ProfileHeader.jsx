import { Avatar, AvatarGroup, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";
const ProfileHeader = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore(state => state.user);
    const { isUpdating, isFollowing, handleFollowUser } = useFollowUser(userProfile.uid);
    const isVisitingOwnProfile = authUser && authUser.username === userProfile.username;
    const isVisitingOtherProfile = authUser && authUser.username !== userProfile.username;
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    {
                        isVisitingOwnProfile && (
                            <Button
                                size="sm"
                                bg="white"
                                color="black"
                                _hover={{ bg: "lightgray" }}
                                onClick={onOpen}
                            >
                                Edit Profile
                            </Button>
                        )
                    }
                    {
                        isVisitingOtherProfile && (
                            <Button
                                size="sm"
                                bg="blue.500"
                                color="white"
                                _hover={{ bg: "blue.600" }}
                                onClick={handleFollowUser}
                                isLoading={isUpdating}
                            >
                                {isFollowing ? "Unfollow" : "Follow"}
                            </Button>
                        )
                    }
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
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
        </Flex>
    )
}
export default ProfileHeader;