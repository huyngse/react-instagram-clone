import { Avatar, AvatarGroup, Button, Flex, Text } from "@chakra-ui/react";

const ProfileHeader = () => {
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
                    src='/assets/profilepic.png'
                    alt="profile picture"
                    name="huyngse"
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
                    <Text fontSize="25px">huyngse</Text>
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
                        <Text as="span" fontWeight="bold">4</Text> Posts
                    </div>
                    <div>
                        <Text as="span" fontWeight="bold">149</Text> Followers
                    </div>
                    <div>
                        <Text as="span" fontWeight="bold">168</Text> Following
                    </div>
                </Flex>
                <Text fontWeight="bold">HuyNG SE</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
            </Flex>
        </Flex>
    )
}
export default ProfileHeader;