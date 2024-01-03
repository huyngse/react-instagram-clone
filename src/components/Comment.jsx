import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const Comment = ({ comment }) => {
  return (
    <Flex
      w="full"
      fontSize="12px"
      gap={2}
    >
      {/* <Avatar
        src={avatar}
        name={props.username}
        alt="Comment avatar"
        size="sm"
      /> */}
      <Box>
        {/* <Text fontWeight="bold">{props.username}</Text> */}
        <Text >{comment.comment}</Text>
        <Text color="gray">{comment.createdAt}</Text>
      </Box>
    </Flex>
  )
}

export default Comment