import React from "react";
import { useQueries } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const heroIds = [1, 3];

const fetchSuperhero = (id) => {
  return http.get(`/superheroes/${id}`);
};

function RQDynamicSuperheroesPage() {
  const [{ data: firstHero }, { data: secondhero }] = useQueries(
    heroIds.map((id) => ({
      queryKey: ["rqsuperhero", id],
      queryFn: () => fetchSuperhero(id),
    }))
  );

  return (
    <Layout>
      <div>RQDynamicSuperheroesPage</div>
      <p>{firstHero?.data.name}</p>
      <p>{secondhero?.data.name}</p>
    </Layout>
  );
}

export default RQDynamicSuperheroesPage;
