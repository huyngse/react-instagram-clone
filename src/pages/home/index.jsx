import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import FeedPost from "../../components/FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 2000);
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
const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex
        gap={20}
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
          Suggested
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage;