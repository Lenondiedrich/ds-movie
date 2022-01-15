import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { colors } from "../../config/constants";
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";

type Props = {
  movieId: string;
};

export const FormCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  };
  return (
    <Box w="100%" backgroundColor="#000" h="100%" p="40px">
      <Flex direction="column" align="center">
        <Image src={movie?.image} maxH="350px" borderRadius="20px" w="320px" />
        <Text color="#fff" fontWeight="bold" fontSize="24px" textAlign="center">
          {movie?.title}
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
            <Input id="email" type="email" w="320px" backgroundColor="#fff" />
            <FormLabel color={colors.mainColor} fontWeight="bold" mt="10px">
              Sua avaliação:
            </FormLabel>
            <Flex direction="column" align="center">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                activeColor={colors.mainColor}
                size={50}
                isHalf={true}
              />
            </Flex>
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
