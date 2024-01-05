import { Box, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
    const { isLoading, posts } = useGetFeedPosts();
    return (
        <VStack my={3} gap={10}>
            {
                isLoading && [0, 1, 2].map((item) => {
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
                !isLoading && posts.length > 0 &&
                posts.map(post => <FeedPost key={post.id} post={post} />)
            }

        </VStack>
    )
}
export default FeedPosts;