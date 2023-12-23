import { Box, Grid, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },
            1000
        )
    }, [])
    return (
        <Grid
            templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)"
            }}
            gap={1}
        >
            {
                isLoading && [0, 1, 2, 3].map((item, index) => (
                    <Skeleton key={index}>
                        <Box h="300px">Content wrapped</Box>
                    </Skeleton>
                ))
            }
            {
                !isLoading && (
                    <>
                        <ProfilePost
                            img="/assets/img1.png"
                        />
                        <ProfilePost
                            img="/assets/img2.png"
                        />
                        <ProfilePost
                            img="/assets/img3.png"
                        />
                        <ProfilePost
                            img="/assets/img4.png"
                        />
                    </>
                )
            }
        </Grid>
    )
}
export default ProfilePosts;