import { Box, Flex, Grid, Skeleton, Text } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";

const ProfilePosts = () => {
    const { isLoading, posts } = useGetUserPosts();
    const noPostsFound = !isLoading && posts.length === 0;
    if (noPostsFound) return <NoPostsFound />
    return (
        <Grid
            templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)"
            }}
            gap={1}
        >
            {
                isLoading && [0, 1, 2].map((item, index) => (
                    <Skeleton key={index}>
                        <Box h="300px">Content wrapped</Box>
                    </Skeleton>
                ))
            }
            {
                !isLoading && posts.map((post) => (
                    <ProfilePost key={post.id} post={post}/>
                ))
            }
        </Grid>
    )
}
export default ProfilePosts;

const NoPostsFound = () => {
    return (
        <Flex
            flexDir="column"
            textAlign="center"
            mx="auto"
            mt={10}
        >
            <Text fontSize="2xl">
                No Posts Found
            </Text>
        </Flex>
    )
}