import { Avatar, Box, Button, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import SuggestedUser from "./SuggestedUser";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
const SuggestedUsers = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore(state => state.user);
  const Header = () => {
    if (!authUser) return null; 
    return (
      <Flex justifyContent="space-between" alignItems="center" w="full" mb={5}>
        <Flex alignItems="center" gap={3}>
          <Link to={`/u/${authUser.username}`} as={RouterLink}>
            <Avatar
              src={authUser.profilePicURL}
              alt="profile picture"
              size="sm"
              name={authUser.fullName}
            />
          </Link>
          <Link to={`/u/${authUser.username}`} as={RouterLink}>
            <Text fontWeight="bold">{authUser.username}</Text>
          </Link>
        </Flex>
        <Button
          background="transparent"
          _hover={{ background: "transparent" }}
          size="sm"
          color="blue.400"
          fontWeight="medium"
          onClick={handleLogout}
          isLoading={isLoggingOut}
        >
          Logout
        </Button>
      </Flex>
    )
  }
  const Footer = () => {
    return (
      <Box w="full" color="grey">
        © 2023 build by <Link as={RouterLink} to="https://github.com/huyngse" target="_blank">huyngse</Link>
      </Box>
    )
  }
  return (
    <VStack my={3} px={5}>
      <Header />
      <Flex justifyContent="space-between" w="full" fontWeight="bold" mb={2}>
        <Text color="grey">
          Suggested for you
        </Text>
        <Text cursor="pointer" _hover={{ color: "lightgray" }}>
          See All
        </Text>
      </Flex>
      <VStack w="full" mb={5} gap={5}>
        {/* <SuggestedUser
          name="Dan Abrahmov"
          followers={1392}
          avatar="https://bit.ly/dan-abramov"
        />
        <SuggestedUser
          name="Ryan Florence"
          followers={567}
          avatar="https://bit.ly/ryan-florence"
        />
        <SuggestedUser
          name="Christian Nwamba"
          followers={759}
          avatar="https://bit.ly/code-beast"
        /> */}
      </VStack>
      <Footer />
    </VStack>
  )
}
export default SuggestedUsers;