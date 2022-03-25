import { useQuery } from "react-query";
import http from "../Services/httpServices";

const fetchSuperheroes = () => {
  return http.get("/superheroes");
};

export const useSuperheroes = (onSuccess, onError) => {
  return useQuery("rq-super-heroes", fetchSuperheroes, {
    enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((superhero) => ({ ...superhero, admin: "armin" }));
    },
  });
};
