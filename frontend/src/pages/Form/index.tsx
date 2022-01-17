import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FormCard } from "../../components/FormCard";

export const Form = () => {
  const { movieId } = useParams();

  return (
    <Box h="calc(100vh - 150px)" backgroundColor="#000">
      <FormCard movieId={`${movieId}`} />
    </Box>
  );
};
