import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import { useLocation } from "react-router-dom";
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {pathname !== '/auth' && (
        <Box w={{ base: "70px", md: "200px" }}>
          <SideBar />
        </Box>
      )}
      <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 200px)"}}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout;