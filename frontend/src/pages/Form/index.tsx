import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FormCard } from "../../components/FormCard";

export const Form = () => {
  const { movieId } = useParams();

  return (
    <Box h="100%" backgroundColor="#000">
      <FormCard movieId={`${movieId}`} />
    </Box>
  );
};
