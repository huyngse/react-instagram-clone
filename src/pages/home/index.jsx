import { Avatar, Box, Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import FeedPost from "../../components/FeedPost";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import SuggestedUser from "../../components/SuggestedUser"

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 1000);
  }, []);
  return (
    <VStack my={3} gap={10}>
      {
        isLoading && [0, 1, 2, 3].map((item) => {
          return (
            <VStack key={item} w="full" bg="gray.800" borderRadius={5}>
              <Flex gap={2} w="full" p={2} alignItems="center">
                <SkeletonCircle size={10} />
                <VStack gap={2}>
                  <Skeleton h="10px" w="200px" >aa</Skeleton>
                  <Skeleton h="10px" w="200px">a</Skeleton>
                </VStack>
              </Flex>
              <Skeleton w="full">
                <Box h="500px" >
                  content
                </Box>
              </Skeleton>
            </VStack>
          )
        })
      }
      {
        !isLoading && (
          <>
            <FeedPost
              img="./assets/img1.png"
              username="burakorkmezz"
              avatar="./assets/img1.png"
            />
            <FeedPost
              img="./assets/img2.png"
              username="josh"
              avatar="./assets/img2.png"
            /><FeedPost
              img="./assets/img3.png"
              username="janedoe"
              avatar="./assets/img3.png"
            /><FeedPost
              img="./assets/img4.png"
              username="johndoe"
              avatar="./assets/img4.png"
            />
          </>
        )
      }

    </VStack>
  )
}
const SuggestedUsers = () => {
  const Header = () => {
    return (
      <Flex justifyContent="space-between" alignItems="center" w="full" mb={5}>
        <Flex alignItems="center" gap={2}>
          <Avatar src='./assets/profilepic.png' alt={`username's profile picture`} size="sm" />
          <Text fontWeight="bold">huyngse</Text>
        </Flex>
        <Link as={RouterLink} to="/auth" color="blue.400" fontWeight="medium">Log Out</Link>
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
          avatar="https://bit.ly/ryan-florance"
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
const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex
        gap={20}
        fontSize={12}
      >
        <Box
          flex={3}
          px={2}
        >
          <FeedPosts />
        </Box>
        <Box
          flex={2}
          display={{ base: "none", md: "block" }}
        >
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage;