import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "../../config/constants";
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../utils/requests";
import { validateEmail } from "../../utils/validate";

type Props = {
  movieId: string;
};

export const FormCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const ratingChanged = (score: number) => {
    setScore(score);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.target as any).email.value;

    if (!validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    };

    axios(config).then(() => {
      navigate("/");
    });
  };

  return (
    <Box w="100%" h="100%" p="40px">
      <Flex direction="column" align="center">
        <Image src={movie?.image} maxH="350px" borderRadius="20px" w="320px" />
        <Text
          color="#fff"
          mt="10px"
          fontWeight="bold"
          fontSize="24px"
          textAlign="center"
        >
          {movie?.title}
        </Text>
        <form onSubmit={handleSubmit}>
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
                onChange={(score) => score && ratingChanged(score)}
                activeColor={colors.mainColor}
                size={50}
                isHalf={true}
              />
            </Flex>
            <Flex direction="column" align="center" mt="20px">
              <Box
                as="button"
                type="submit"
                backgroundColor={colors.button}
                p="5px 10px 5px 10px"
                borderRadius="20px"
                w="150px"
                _hover={{
                  opacity: "0.5",
                }}
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
                  _hover={{ opacity: "0.5" }}
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
