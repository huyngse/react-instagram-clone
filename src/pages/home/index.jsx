import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import FeedPost from "../../components/FeedPost";

const FeedPosts = () => {
  return (
    <VStack my={3} gap={10}>
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