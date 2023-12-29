import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
const Search = () => {
    return (
        <Tooltip
            hasArrow
            label="Search"
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
            >
                <SearchLogo />
                <Box display={{ base: 'none', md: 'block' }}>
                    Search
                </Box>
            </Flex>
        </Tooltip>
    )
}

export default Search;