import { Box, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../config/constants";
import { ReactComponent as Star } from "../../assets/imgs/starFull.svg";

export const MovieScore = ({ movie }: any) => {
  return (
    <Flex w="100%" justify="space-between">
      <Flex align="center">
        <Star />
        <Text
          ml="5px"
          fontSize="18px"
          color={colors.subTitles}
          fontWeight="bold"
        >
          {movie?.score > 0 ? `${movie?.score.toFixed(1)}/5` : "-"}
        </Text>
      </Flex>
      <Box>
        <Text fontSize="18px" color={colors.subTitles} fontWeight="bold">
          {`${movie?.count} avaliações`}
        </Text>
      </Box>
    </Flex>
  );
};
