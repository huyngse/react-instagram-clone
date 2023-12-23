import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const Comment = (props) => {
  return (
    <Flex
      w="full"
      fontSize="12px"
      gap={2}
    >
      <Avatar
        src={props.avatar}
        name={props.username}
        alt="Comment avatar"
        size="sm"
      />
      <Box>
        <Text fontWeight="bold">{props.username}</Text>
        <Text >{props.text}</Text>
        <Text color="gray">{props.createdAt}</Text>
      </Box>
    </Flex>
  )
}

export default Comment