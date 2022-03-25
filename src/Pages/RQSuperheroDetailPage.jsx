import React from "react";
import { useParams } from "react-router-dom";
import { useSuperhero } from "../Hooks/useSuperhero";
import Layout from "../Layout/Layout";

function RQSuperheroDetailPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSuperhero(id);
  return (
    <Layout>
      <div className="text-4xl">RQSuperheroDetailPage</div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : !isError && data ? (
        <h1>
          {data.data.name} - {data.data.alterEgo}
        </h1>
      ) : (
        <h1>{error}</h1>
      )}
    </Layout>
  );
}

export default RQSuperheroDetailPage;
