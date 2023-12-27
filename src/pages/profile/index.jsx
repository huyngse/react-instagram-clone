import { Box, Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileTabs from "../../components/profile/ProfileTabs";
import ProfilePosts from "../../components/profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import { Link as RouterLink } from "react-router-dom";

import { useParams } from "react-router-dom";
const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername({ username });
  const userFounded = isLoading || userProfile;
  if (!userFounded) {
    return <UserNotFound />
  }
  return (
    <Container maxW="container.lg" py={5}>
      <Flex w="full">
        {
          !isLoading && userProfile && <ProfileHeader />
        }
        {
          isLoading && <ProfileHeaderSkeleton/>
        }
      </Flex>
      <Box>
        <ProfileTabs />
        <ProfilePosts />
      </Box>
    </Container>
  )
}

export default ProfilePage;

const UserNotFound = () => {
  return (
    <Flex flexDirection="column" textAlign="center" mx="auto">
      <Text fontSize="2xl">User Not found</Text>
      <Link as={RouterLink} to="/" color="blue.500" w="max-content" mx="auto">Go home</Link>
    </Flex>
  )
}

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      my="50px"
      px={{ base: 5, md: 10 }}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 2, md: 5 }}
      w="full"
    >
      <SkeletonCircle size="24" />
      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx="auto"
        flex={1}
      >
        <Skeleton height="12px" width="550px" />
        <Skeleton height="12px" width="550px" />
      </VStack>
    </Flex>
  )
}