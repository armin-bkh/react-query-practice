import { useMutation, useQuery, useQueryClient } from "react-query";
import http from "../Services/httpServices";

const fetchSuperheroes = () => {
  return http.get("/superheroes");
};

const postSuperhero = (superhero) => {
  return http.post("/superheroes", superhero);
};

export const useSuperheroes = (onSuccess, onError) => {
  return useQuery("rq-super-heroes", fetchSuperheroes, {
    // enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      return data.data.map((superhero) => ({ ...superhero, admin: "armin" }));
    },
  });
};

export const useAddSuperhero = () => {
  const queryClient = useQueryClient();
  return useMutation(postSuperhero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("rq-super-heroes");
      queryClient.setQueryData("rq-super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
