import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

function SuperheroesPage() {
  const [superheroes, setSuperheroes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    http
      .get("/superheroes")
      .then(({ data }) => {
        setLoading(false);
        setSuperheroes(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <Layout>
      <div>SuperheroesPage</div>
      {loading ? (
        <h1>Loading...</h1>
      ) : !error && superheroes ? (
        superheroes.map((superhero) => <p>{superhero.name}</p>)
      ) : (
        <h1>{error}</h1>
      )}
    </Layout>
  );
}

export default SuperheroesPage;
