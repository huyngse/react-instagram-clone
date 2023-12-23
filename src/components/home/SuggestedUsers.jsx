import { Avatar, Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SuggestedUser from "./SuggestedUser";
const SuggestedUsers = () => {
    const Header = () => {
      return (
        <Flex justifyContent="space-between" alignItems="center" w="full" mb={5}>
          <Flex alignItems="center" gap={2}>
            <Avatar
              src='/assets/profilepic.png'
              alt="profile picture"
              size="sm"
              name="huyngse"
            />
            <Text fontWeight="bold">huyngse</Text>
          </Flex>
          <Link as={RouterLink} to="/auth" color="blue.400" fontWeight="medium">Logout</Link>
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
          <SuggestedUser
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
          />
        </VStack>
        <Footer />
      </VStack>
    )
  }
  export default SuggestedUsers;