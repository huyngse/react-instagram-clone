import { Avatar, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { FaComment, FaHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../home/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";
import Caption from "../Comment/Caption";
const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore(state => state.userProfile);
  const authUser = useAuthStore(state => state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore(state => state.deletePost);
  const deletePostFromProfile = useUserProfileStore(state => state.deletePost);
  const handleDeletePost = async () => {
    if (isDeleting) return;
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    setIsDeleting(true);
    try {
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef);
      await deleteDoc(doc(firestore, "posts", post.id));
      const userRef = doc(firestore, "users", authUser.uid);
      await updateDoc(userRef, {
        posts: arrayRemove(post.id)
      });
      deletePost(post.id);
      deletePostFromProfile(post.id);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  }
  const CustomModal = () => {
    const Header = () => {
      return (
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap={2}>
            <Avatar
              src={userProfile.profilePicURL}
              size="sm"
              name={userProfile.fullName}
              alt="Profile picture"
            />
            <Text fontSize={12} fontWeight="bold">
              {userProfile.username}
            </Text>
          </Flex>
          {/* DELETE BUTTON */}
          {
            userProfile?.uid === authUser.uid && (
              <Button
                size="small"
                bg="transparent"
                _hover={{
                  bg: "whiteAlpha.300", color: "red.600"
                }}
                borderRadius={4}
                p={1}
                onClick={handleDeletePost}
                isLoading={isDeleting}
              >
                <MdDelete cursor="pointer" size={20} />
              </Button>
            )
          }
        </Flex>
      )
    }
    return (
      < Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "md", md: "5xl" }
        }
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg="black" >
            <Flex
              gap="4"
              fontSize="30px"
              maxH={"90vh"}
              minH={"50vh"}
            >
              <Flex
                borderRadius={4}
                overflow="hidden"
                border="1px solid"
                borderColor="whiteAlpha.300"
                flex={1.5}
                justifyContent="center"
                alignItems="center"
              >
                <Image src={post.imageURL} alt="Profile post picture" />
              </Flex>
              <Flex
                flex={1}
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                p={5}
              >
                <Header />
                <Divider bg="gray.500" my={4} />
                {/* COMMENT SECTION */}
                <VStack gap={5} maxH="350px" overflowY="auto">
                  {
                    post.caption && <Caption post={post} />
                  }
                  {post.comments.map((comment) => {
                    return (
                      <Comment
                        key={comment.id}
                        comment={comment}
                      />
                    )
                  })
                  }
                </VStack>
                <PostFooter isProfilePage post={post} creatorProfile={userProfile}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal >
    )
  }
  return (
    <>
      <GridItem
        cursor="pointer"
        borderRadius={4}
        overflow="hidden"
        border="1px solid"
        borderColor="gray.700"
        position="relative"
        aspectRatio="1/1"
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{
            opacity: 1,
          }}
          position="absolute"
          w="full"
          h="full"
          justifyContent="center"
          alignItems="center"
          bg="blackAlpha.700"
          transition="all 0.3s"
          fontSize="20px"
          gap={5}
        >
          <Flex alignItems="center" gap={2}>
            <FaHeart />
            <Text>
              {post.likes.length}
            </Text>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <FaComment />
            <Text>
              {post.comments.length}
            </Text>
          </Flex>
        </Flex>
        <Image src={post.imageURL} alt="Profile post image" w="full" h="full" objectFit="cover" />
      </GridItem>
      <CustomModal />
    </>

  )
}

export default ProfilePost