import React from "react";
import { Link } from "react-router-dom";
import { useSuperheroes } from "../Hooks/useSuperheroes";
import Layout from "../Layout/Layout";

const onSuccess = (data) => {
  console.log("success", data);
};

const onError = (error) => {
  console.log("error", error);
};

function RQSuperheroesPage() {
  const { isLoading, isFetching, isError, error, isIdle, refetch, data } =
    useSuperheroes(onSuccess, onError);

  return (
    <Layout>
      <div className="text-4xl">RQSuperheroesPage</div>
      {!isIdle &&
        (isLoading || isFetching ? (
          <h1>Loading...</h1>
        ) : !isError && data ? (
          data.map((superhero) => (
            <p key={superhero.id}>
              <Link to={`${superhero.id}`}>
                {superhero.name} {superhero.admin}
              </Link>
            </p>
          ))
        ) : (
          <h1>{error.message}</h1>
        ))}
      <button
        className="border bg-gray-500 px-3 py-1 rounded-md"
        onClick={refetch}
      >
        fetch superheroes
      </button>
    </Layout>
  );
}

export default RQSuperheroesPage;
