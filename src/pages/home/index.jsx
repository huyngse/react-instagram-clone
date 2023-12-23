import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/home/FeedPosts";
import SuggestedUsers from "../../components/home/SuggestedUsers"

const HomePage = () => {
  return (
    <Container maxW={"container.lg"} my={5}>
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
          <SuggestedUsers />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage;