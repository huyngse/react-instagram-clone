import { Flex, Text } from "@chakra-ui/react";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa6";
import { IoMdGrid } from "react-icons/io";

const ProfileTabs = () => {
    return (
      <Flex
        borderTop="1px solid"
        borderColor="gray.700"
        justifyContent="center"
        textTransform="uppercase"
        fontWeight="bold"
      >
        <Flex
          p="10px 20px"
          gap={2}
          borderTop="1px solid white"
          cursor="pointer"
        >
          <IoMdGrid fontSize="25px" />
          <Text display={{ base: "none", md: "block" }}>
            Posts
          </Text>
        </Flex>
        <Flex
          p="10px 20px"
          gap={2}
          cursor="pointer"
        >
          <FaRegBookmark fontSize="25px" />
          <Text display={{ base: "none", md: "block" }}>
            Saved
          </Text>
        </Flex>
        <Flex
          p="10px 20px"
          gap={2}
          cursor="pointer"
        >
          <FaRegHeart fontSize="25px" />
          <Text display={{ base: "none", md: "block" }}>
            Likes
          </Text>
        </Flex>
      </Flex>
    )
  }
  export default ProfileTabs;