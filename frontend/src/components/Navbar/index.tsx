import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/imgs/github.svg";
import { colors } from "../../config/constants";

export const Navbar = () => {
  return (
    <Box w="100%" h="150px" backgroundColor={colors.mainColor} p="30px">
      <Flex>
        <Flex w="100%" h="100%" align="center">
          <Link to="/">
            <Text fontFamily="Raleway" fontWeight="bold" fontSize="50px">
              DSMovie
            </Text>
          </Link>
        </Flex>
        <Flex align="center">
          <GithubIcon />
          <a href="https://github.com/lenondiedrich">
            <Text ml="5px" fontFamily="Raleway" fontWeight="bold">
              /lenondiedrich
            </Text>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};
