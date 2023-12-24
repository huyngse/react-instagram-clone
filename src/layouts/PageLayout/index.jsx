import { Box, Flex, Spinner } from "@chakra-ui/react";
import SideBar from "../../components/SideBar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase"
import Navbar from "../../components/Navbar";
const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading,] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = pathname !== "/auth" && !user && !loading;

  // CHECKING IF USER IS AUTHENTICATED
  if (!user && loading) return <PageLayoutSpinner />
  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* SIDE BAR */}
      {canRenderSidebar && (
        <Box w={{ base: "70px", md: "200px" }}>
          <SideBar />
        </Box>
      )}
      {/* NAVBAR */
        canRenderNavbar && <Navbar />
      }

      {/* PAGE CONTENTS ON THE RIGHT */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 200px)" }} mx="auto">
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex flexDirection="column" h="100vh" alignItems="center" justifyContent="center">
      <Spinner size="xl"/>
    </Flex>
  )
}