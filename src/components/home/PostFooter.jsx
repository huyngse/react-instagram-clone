import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { GoPaperAirplane } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
const PostFooter = ({ isProfilePage, username, post }) => {
    const commentRef = useRef(null);
    const { isCommenting, handlePostComment } = usePostComment();
    const [comment, setComment] = useState("");
    const authUser = useAuthStore(state => state.user);
    const { likes, isLiked, handleLikePost} = useLikePost(post);
    const handleSubmitComment = async () => {
        await handlePostComment(post.id, comment);
        setComment("");
    }
    return (
        <Box padding={2} fontSize={14} >
            <Flex gap={3} py={1} fontSize={25}>
                {/* LIKE BUTTON */}
                <Box
                    onClick={handleLikePost}
                    cursor="pointer"
                >
                    {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
                </Box>
                {/* COMMENT BUTTON */}
                <Box cursor="pointer" onClick={
                    () => {
                        commentRef.current.focus();
                    }
                }>
                    <IoChatbubbleOutline />
                </Box>
            </Flex>
            <Text py={1} fontWeight={600}>
                {likes} likes
            </Text>
            {
                !isProfilePage && (
                    <>
                        <Flex gap={2}>
                            <Text py={1} fontWeight={700}>
                                {username}
                            </Text>
                            <Text py={1} fontWeight={500}>
                                Feeling good
                            </Text>
                        </Flex>
                        <Text py={1} color='gray'>
                            View all 10 comment
                        </Text>
                    </>

                )
            }
            {/* COMMENT FORM */}
            {
                authUser && (
                    <InputGroup>
                        <Input
                            type='tel'
                            placeholder='Comment'
                            variant="flushed"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            ref={commentRef}
                        />
                        <InputRightElement >
                            {/* SUBMIT COMMENT BUTTON */}
                            <Button
                                size='sm'
                                color="blue.500"
                                _hover={{ color: "white" }}
                                isLoading={isCommenting}
                                onClick={handleSubmitComment}
                            >
                                <GoPaperAirplane />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                )
            }
        </Box>
    )
}
export default PostFooter;