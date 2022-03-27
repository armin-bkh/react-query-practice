import React from "react";
import { useInfiniteQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const fetchColors = ({ pageParam = 1 }) => {
  return http.get(`/colors?_limit=2&_page=${pageParam}`);
};

function RQInfinitePage() {
  const {
    isLoading,
    isFetchingNextPage,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery("colors", fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else return undefined;
    },
  });

  return (
    <Layout>
      <div>RQInfinitePage</div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : !isError && data ? (
        data.pages.map((group, index) => (
          <React.Fragment key={index}>
            {group.data.map((color) => (
              <h1 key={color.id}>
                {color.id} {color.color}
              </h1>
            ))}
          </React.Fragment>
        ))
      ) : (
        error && <h1>{error}</h1>
      )}
      {isFetchingNextPage && <h1>loading...</h1>}
      <button
        className="bg-blue-400 disabled:bg-slate-400"
        disabled={!hasNextPage}
        onClick={fetchNextPage}
      >
        load more...
      </button>
    </Layout>
  );
}

export default RQInfinitePage;
