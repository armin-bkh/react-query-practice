import React from "react";
import { useQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const fetchSuperheroes = () => {
  return http.get("/superheroes");
};

function RQSuperheroesPage() {
  const { isLoading, isFetching, isError, error, isIdle, refetch, data } =
    useQuery("rq-super-heroes", fetchSuperheroes, {
      enabled: false,
    });
  return (
    <Layout>
      <div className="text-4xl">RQSuperheroesPage</div>
      {!isIdle ? (
        isLoading || isFetching ? (
          <h1>Loading...</h1>
        ) : !isError && data ? (
          data.data.map((superhero) => (
            <p key={superhero.id}>{superhero.name}</p>
          ))
        ) : (
          <h1>{error.message}</h1>
        )
      ) : null}
      <button className="border bg-gray-500" onClick={refetch}>
        fetch superheroes
      </button>
    </Layout>
  );
}

export default RQSuperheroesPage;
