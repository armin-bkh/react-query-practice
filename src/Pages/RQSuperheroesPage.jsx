import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddSuperhero, useSuperheroes } from "../Hooks/useSuperheroes";
import Layout from "../Layout/Layout";

const onSuccess = (data) => {
  console.log("success", data);
};

const onError = (error) => {
  console.log("error", error);
};

function RQSuperheroesPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    alterEgo: "",
  });
  const { isLoading, isFetching, isError, error, isIdle, refetch, data } =
    useSuperheroes(onSuccess, onError);
  const {
    mutate: addSuperhero,
    isError: addIsError,
    isLoading: addIsLoading,
    error: addError,
  } = useAddSuperhero();

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addSuperhero(formValues);
    setFormValues({
      name: "",
      alterEgo: "",
    });
  };

  return (
    <Layout>
      <div className="text-4xl">RQSuperheroesPage</div>
      {addIsLoading ? (
        <p>loading...</p>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            className="border"
            placeholder="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={changeHandler}
          />
          <input
            className="border"
            placeholder="alterEgo"
            type="text"
            name="alterEgo"
            value={formValues.alterEgo}
            onChange={changeHandler}
          />
          <button type="submit" className="bg-blue-400 px-2 -y-1">
            add superhero
          </button>
        </form>
      )}
      {!isIdle &&
        (isLoading ? (
          <span>Loading...</span>
        ) : !isError && data ? (
          data.map((superhero) => (
            <p key={superhero.id}>
              <Link to={`${superhero.id}`}>
                {superhero.name} {superhero.alterEgo}
              </Link>
            </p>
          ))
        ) : (
          <div>{error.message}</div>
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
