import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import { Movie, MovieCard } from "../../components/MovieCard";
import { Pagination } from "../../components/Pagination";
import { movies } from "../../config/constants";
import { BASE_URL } from "../../utils/requests";

export const Listing = () => {
  //FORMA ERRADA
  axios.get(`${BASE_URL}/movies?size=12&page=0`).then((response) => {
    console.log(response.data);
  });

  return (
    <>
      <Box backgroundColor="#000" p="30px" w="100%">
        <Grid
          w="100%"
          align="center"
          justifyContent="center"
          templateColumns="repeat(auto-fit, 300px)"
          rowGap={10}
          gap={10}
        >
          {movies.map((movie: Movie) => (
            <Box key={movie.id}>
              <MovieCard movie={movie} />
            </Box>
          ))}
        </Grid>
        <Pagination />
      </Box>
    </>
  );
};
