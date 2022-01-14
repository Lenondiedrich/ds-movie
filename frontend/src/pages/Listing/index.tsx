import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Movie, MovieCard } from "../../components/MovieCard";
import { Pagination } from "../../components/Pagination";
import { movies } from "../../config/constants";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

export const Listing = () => {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=2`).then((response) => {
      const data = response.data as MoviePage;
      console.log(data);
      setPageNumber(data.number);
    });
  }, []);

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
        <p>{pageNumber}</p>
        <Pagination />
      </Box>
    </>
  );
};
