import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactComponent as BackArrow } from "../../assets/imgs/backArrow.svg";
import { ReactComponent as ForwardArrow } from "../../assets/imgs/forwardArrow.svg";
import { colors } from "../../config/constants";

export const Pagination = () => {
  return (
    <Flex align="center" justify="center" w="100%" m="20px 0 20px 0">
      <Flex backgroundColor={colors.mainColor} p="10px" borderRadius="30px">
        <Box border="1px solid black" borderRadius="5px" p="3px 6px 3px 6px">
          <BackArrow />
        </Box>
        <Text margin="0 15px 0 15px" fontWeight="bold">{`${1} de ${3}`}</Text>
        <Box
          border="1px solid black"
          borderRadius="5px"
          p="3px 6px 3px 6px"
          cursor="pointer"
        >
          <ForwardArrow />
        </Box>
      </Flex>
    </Flex>
  );
};
