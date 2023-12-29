import { Box, Link, Tooltip } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink} from "react-router-dom";
const Home = () => {
  return (
    <Tooltip
    hasArrow
    label="Home"
    placement="right"
    ml={1}
    openDelay={500}
    display={{ base: 'block', md: 'none' }}
  >
    <Link
      to="/"
      as={RouterLink}
      _hover={{ bg: "whiteAlpha.400" }}
      borderRadius={6}
      p={2}
      display="flex"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'flex-start' }}
      gap={4}
      w={{ base: 10, md: 'full' }}
    >
       <AiFillHome size={25} />
      <Box display={{ base: 'none', md: 'block' }}>
        Home
      </Box>
    </Link>
  </Tooltip>
  )
}

export default Home