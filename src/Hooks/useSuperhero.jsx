import { useQuery, useQueryClient } from "react-query";
import http from "../Services/httpServices";

const fetchSuperhero = ({ queryKey }) => {
  const [, id] = queryKey;
  return http.get(`/superheroes/${id}`);
};

export const useSuperhero = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["rgsuperhero", id], fetchSuperhero, {
    initialData: () => {
      const result = queryClient.getQueriesData("rq-super-heroes");
      const [[, { data }]] = result;
      const hero = data?.find((hero) => hero.id === Number(id));
      return hero ? { data: hero } : undefined;
    },
  });
};
