import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from "@chakra-ui/react"
import { FaComment, FaHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment";
import PostFooter from "../home/PostFooter";
const ProfilePost = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const CustomModal = () => {
    const Header = () => {
      return (
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap={2}>
            <Avatar
              src="/assets/profilepic.png"
              size="sm"
              name="huyngse"
              alt="Profile picture"
            />
            <Text fontSize={12} fontWeight="bold">
              huyngse
            </Text>
          </Flex>
          <Box
            _hover={{
              bg: "whiteAlpha.300", color: "red.600"
            }}
            borderRadius={4}
            p={1}
          >
            <MdDelete cursor="pointer" size={20} />
          </Box>
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
                <Image src={props.img} alt="Profile post picture" />
              </Flex>
              <Flex
                flex={1}
                display={{ base: "none", md: "flex" }}
                flexDirection="column"
                p={5}
              >
                <Header />
                <Divider bg="gray.500" my={4} />
                <VStack gap={5} maxH="350px" overflowY="auto">
                  <Comment
                    createdAt="2 days ago"
                    username="huyngse"
                    avatar="/assets/profilepic.png"
                    text="Dummy images from unsplash"
                  />
                  <Comment
                    createdAt="12 hours ago"
                    username="abrahmov"
                    avatar="https://bit.ly/dan-abramov"
                    text="Nice pic"
                  />
                  <Comment
                    createdAt="3 hours ago"
                    username="kentdodds"
                    avatar="https://bit.ly/kent-c-dodds"
                    text="Good clone dude!"
                  />
                </VStack>
                <Divider bg="gray.500" my={4} mb="auto" />
                <PostFooter username="huyngse" isProfilePage/>
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
              1
            </Text>
          </Flex>
          <Flex alignItems="center" gap={2}>
            <FaComment />
            <Text>
              7
            </Text>
          </Flex>
        </Flex>
        <Image src={props.img} alt="Profile post image" w="full" h="full" objectFit="cover" />
      </GridItem>
      <CustomModal />
    </>

  )
}

export default ProfilePost