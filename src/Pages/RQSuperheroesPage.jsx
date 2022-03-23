import React from "react";
import { useQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const fetchSuperheroes = () => {
  return http.get("/superheroes");
};

function RQSuperheroesPage() {
  const { isLoading, error, data } = useQuery(
    "rq-super-heroes",
    fetchSuperheroes
  );
  return (
    <Layout>
      <div className="text-4xl">RQSuperheroesPage</div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : !error && data ? (
        data.data.map((superhero) => <p key={superhero.id}>{superhero.name}</p>)
      ) : (
        <h1>{error.message}</h1>
      )}
    </Layout>
  );
}

export default RQSuperheroesPage;
