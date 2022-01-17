import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Pagination } from "../../components/Pagination";
import { MoviePage } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

export const Listing = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Box backgroundColor="#000" p="30px" w="100%" h="calc(100vh - 150px)">
        <Grid
          w="100%"
          align="center"
          justifyContent="center"
          templateColumns="repeat(auto-fit, 300px)"
          rowGap={10}
          gap={10}
        >
          {page?.content?.map((movie) => (
            <Box key={movie.id}>
              <MovieCard movie={movie} />
            </Box>
          ))}
        </Grid>
        <Pagination page={page} onChange={handlePageChange} />
      </Box>
    </>
  );
};
