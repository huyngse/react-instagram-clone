import { Avatar, Box, Button, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo } from "../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { Tooltip } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";
const SideBar = () => {
  
  const {handleLogout, isLoggingOut} = useLogout();
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <Avatar
        size={'sm'}
        name="huyngse"
        src="/assets/profilepic.png"
      />,
      text: "Profile",
      link: "/u/huyngse",
    },
  ]
  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
    // px={{ base: 2, md: 4 }}
    >
      <Flex
        direction={'column'}
        gap={10}
        alignItems={'center'}
        h={'full'}
      >
        {/* SIDEBAR LOGO */}
        <Link
          to={'/'}
          as={RouterLink}
          display={{ base: 'none', md: 'block' }}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={'/'}
          as={RouterLink}
          display={{ base: 'block', md: 'none' }}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.200'
          }}
          p={2}
        >
          <InstagramMobileLogo />
        </Link>
        {/* SIDEBAR ITEMS */}
        <Flex
          direction={'column'}
          gap={5}
          alignItems={'center'}
          width={'full'}
          px={2}
        >
          {
            sideBarItems.map((item, index) => {
              return (
                <Tooltip
                  key={index}
                  hasArrow
                  label={item.text}
                  placement="right"
                  ml={1}
                  openDelay={500}
                  display={{ base: 'block', md: 'none' }}
                >
                  <Link
                    to={item.link}
                    as={RouterLink}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    gap={4}
                    w={{ base: 10, md: 'full' }}
                  >
                    {item.icon}
                    <Box display={{ base: 'none', md: 'block' }}>
                      {item.text}
                    </Box>
                  </Link>
                </Tooltip>
              )
            })
          }
        </Flex>
        {/* LOGOUT */}
        <Tooltip
          hasArrow
          label={'Logout'}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Button
            borderRadius={6}
            p={2}
            alignItems={'center'}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            gap={4}
            w={{ base: 10, md: 'full' }}
            mt={'auto'}
            cursor="pointer"
            onClick={handleLogout}
            variant="ghost"
            isLoading={isLoggingOut}
          >
            <BiLogOut size={25}/>
            <Box display={{ base: 'none', md: 'block' }}>
              Logout
            </Box>
          </Button>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;