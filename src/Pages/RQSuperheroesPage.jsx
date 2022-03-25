import React from "react";
import { useQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const fetchSuperheroes = () => {
  return http.get("/superheroes");
};

function RQSuperheroesPage() {
  const { isLoading, isFetching, isError, error, data } = useQuery(
    "rq-super-heroes",
    fetchSuperheroes,
    {
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true,
    }
  );
  console.log({ isLoading, isFetching });
  return (
    <Layout>
      <div className="text-4xl">RQSuperheroesPage</div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : !isError && data ? (
        data.data.map((superhero) => <p key={superhero.id}>{superhero.name}</p>)
      ) : (
        <h1>{error.message}</h1>
      )}
    </Layout>
  );
}

export default RQSuperheroesPage;
