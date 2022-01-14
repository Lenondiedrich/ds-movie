import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../../config/constants";
import { Movie } from "../../types/movie";
import { MovieScore } from "../MovieScore";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Box maxW="300px">
      <Box mb="5px">
        <MovieScore movie={movie} />
      </Box>
      <Image src={movie?.image} alt="Poster image" borderRadius="10px" />
      <Text color="#fff" fontWeight="bold">
        {movie?.title}
      </Text>
      <Link to={`/form/${movie?.id}`}>
        <Box
          as="button"
          border="2px"
          mt="10px"
          borderColor={colors?.mainColor}
          backgroundColor="transparent"
          color={colors?.mainColor}
          borderRadius="30px"
          p="5px 10px 5px 10px"
        >
          <Text fontWeight="bold">AVALIAR</Text>
        </Box>
      </Link>
    </Box>
  );
};
