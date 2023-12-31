import { Box, Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, Tooltip, useDisclosure } from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
import { LuImagePlus } from "react-icons/lu";
import { useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";
const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [caption, setCaption] = useState("");
    const imageRef = useRef(null);
    const { selectedFile, handleImageChange, setSelectedFile } = usePreviewImg();
    return (
        <>
            <Tooltip
                hasArrow
                label="Create Post"
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: 'block', md: 'none' }}
            >
                <Flex
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    display="flex"
                    alignItems="center"
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    gap={4}
                    w={{ base: 10, md: 'full' }}
                    onClick={onOpen}
                >
                    <CreatePostLogo />
                    <Box display={{ base: 'none', md: 'block' }}>
                        Create
                    </Box>
                </Flex>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent bg="black" border="1px solid gray">
                    <ModalHeader>
                        Create Post
                    </ModalHeader>
                    <ModalBody pb={6}>
                        <Textarea placeholder="Post caption..."
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                        <Input type="file" hidden ref={imageRef} onChange={handleImageChange}/>
                        {
                            selectedFile && (
                                <Flex
                                    mt={5}
                                    w="full"
                                    position="relative"
                                    justifyContent="center"
                                >
                                    <Image src={selectedFile} alt="selected image" />
                                    <CloseButton
                                        position="absolute"
                                        top={2}
                                        right={2}
                                        onClick={() => setSelectedFile(null)}
                                    />
                                </Flex>
                            )
                        }
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            mt={5}
                        >
                            <Button
                                p={1}
                                onClick={() => imageRef.current.click()}
                            >
                                <LuImagePlus
                                    size={30}
                                />
                            </Button>
                        </Flex>

                        {

                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3}>Post</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreatePost;