import React from "react";
import { useQueries, useQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const fetchSuperheroes = () => {
  return http.get("/superheroes");
};

const fetchFriends = () => {
  return http.get("/friends");
};

function RQParallelPage() {
  // const { data: superheroes } = useQuery("rqsuperheroes", fetchSuperheroes);
  // const { data: friends } = useQuery("rqfriends", fetchFriends);
  const [{ data: superheroes }, { data: friends }] = useQueries([
    { queryKey: "superheroes", queryFn: fetchSuperheroes },
    { queryKey: "friends", queryFn: fetchFriends },
  ]);

  return (
    <Layout>
      <div className="text-4xl">RQParallelPage</div>
      <h1 className="text-3xl">superheroes</h1>
      {superheroes?.data.map((superhero) => (
        <div key={superhero.id}>
          <p>{superhero.name}</p>
        </div>
      ))}
      <h1 className="text-3xl">friends</h1>
      {friends?.data.map((friend) => (
        <div key={friend.id}>
          <p>{friend.name}</p>
        </div>
      ))}
    </Layout>
  );
}

export default RQParallelPage;
