import { useQuery } from "react-query";
import http from "../Services/httpServices";

const fetchSuperhero = ({ queryKey }) => {
  const [, id] = queryKey;
  return http.get(`/superheroes/${id}`);
};

export const useSuperhero = (id) => {
  return useQuery(["rgsuperhero", id], fetchSuperhero);
};
