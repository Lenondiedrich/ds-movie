import { Box, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../config/constants";
import { MoviePage } from "../../types/movie";
import { BackArrow, ForwardArrow } from "../../utils/CustomArrows";

type Props = {
  page: MoviePage;
  onChange: Function;
};

export const Pagination = ({ page, onChange }: Props) => {
  return (
    <Flex align="center" justify="center" w="100%" m="20px 0 20px 0">
      <Flex backgroundColor={colors.mainColor} p="10px" borderRadius="30px">
        <Box
          as="button"
          disabled={page?.first}
          border={page?.first ? "1px solid gray" : "1px solid black"}
          borderRadius="5px"
          p="3px 6px 3px 6px"
          cursor={page?.first ? "default" : "pointer"}
          onClick={() => onChange(page?.number - 1)}
        >
          <BackArrow color={page?.first ? "gray" : "black"} />
        </Box>
        <Text margin="0 15px 0 15px" fontWeight="bold">{`${
          page?.number + 1
        } de ${page?.totalPages}`}</Text>
        <Box
          as="button"
          disabled={page?.last}
          border={page?.last ? "1px solid gray" : "1px solid black"}
          borderRadius="5px"
          p="3px 6px 3px 6px"
          cursor={page?.last ? "default" : "pointer"}
          onClick={() => onChange(page?.number + 1)}
        >
          <ForwardArrow color={page?.last ? "gray" : "black"} />
        </Box>
      </Flex>
    </Flex>
  );
};
