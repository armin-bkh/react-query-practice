import React, { useState } from "react";
import { useQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";
const fetchColors = (page) => {
  return http.get(`/colors?_limit=2&_page=${page}`);
};
function RQPaginatedPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isFetching, isError, error } = useQuery(
    ["rqpaginated", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );
  return (
    <Layout>
      <div>RQPaginatedPage</div>
      {isLoading ? (
        <h1>loading</h1>
      ) : !isError && data ? (
        data.data.map((color) => <p key={color.id}>{color.color}</p>)
      ) : (
        error && <h1>{error}</h1>
      )}
      <button
        disabled={pageNumber === 1}
        className="px-2 py-1 bg-blue-300 disabled:bg-slate-700"
        onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)}
      >
        prevPage
      </button>
      <button
        disabled={pageNumber === 4}
        className="px-2 py-1 bg-blue-300 disabled:bg-slate-700"
        onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
      >
        NextPage
      </button>
      {data && isFetching && <h1>loading...</h1>}
    </Layout>
  );
}

export default RQPaginatedPage;
