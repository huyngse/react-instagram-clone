import { Box, Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileTabs from "../../components/profile/ProfileTabs";
import ProfilePosts from "../../components/profile/ProfilePosts";
const ProfilePage = () => {


  return (
    <Container maxW="container.lg" py={5}>
      <Flex w="full">
        <ProfileHeader />
      </Flex>
      <Box>
        <ProfileTabs />
        <ProfilePosts />
      </Box>
    </Container>
  )
}

export default ProfilePage;