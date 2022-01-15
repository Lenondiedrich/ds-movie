import { useParams } from "react-router-dom";
import { FormCard } from "../../components/FormCard";

export const Form = () => {
  const { movieId } = useParams();

  return <FormCard movieId={`${movieId}`} />;
};
