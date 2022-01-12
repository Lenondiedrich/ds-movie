import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { colors, movies } from "../../config/constants";
import { Link } from "react-router-dom";

export const Form = () => {
  const { movieId } = useParams();

  const getMovie = () => {
    return movies.filter((movie) => movie.id === parseInt(movieId as any));
  };

  const movie = getMovie();

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };

  return (
    <Box w="100%" backgroundColor="#000" h="100%" p="40px">
      <Flex direction="column" align="center">
        <Image
          src={movie[0].image}
          maxH="350px"
          borderRadius="20px"
          w="280px"
        />
        <Text color="#fff" fontWeight="bold" fontSize="24px" textAlign="center">
          {movie[0].title}
        </Text>
        <form>
          <FormControl mt="20px">
            <FormLabel
              htmlFor="email"
              color={colors.mainColor}
              fontWeight="bold"
            >
              Informe seu e-mail:
            </FormLabel>
            <Input id="email" type="email" w="280px" backgroundColor="#fff" />
            <FormLabel color={colors.mainColor} fontWeight="bold" mt="10px">
              Sua avaliação:
            </FormLabel>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              activeColor={colors.mainColor}
              size={50}
              isHalf={true}
            />
            <Flex direction="column" align="center" mt="20px">
              <Box
                as="button"
                backgroundColor={colors.button}
                p="5px 10px 5px 10px"
                borderRadius="20px"
                w="150px"
              >
                <Text color="#000" fontWeight="bold">
                  ENVIAR
                </Text>
              </Box>
              <Link to="/">
                <Box
                  as="button"
                  border={`3px solid ${colors.button}`}
                  p="5px 10px 5px 10px"
                  borderRadius="20px"
                  w="150px"
                  mt="15px"
                >
                  <Text color={colors.button} fontWeight="bold">
                    CANCELAR
                  </Text>
                </Box>
              </Link>
            </Flex>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};
