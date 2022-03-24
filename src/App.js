import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRoutes } from "react-router-dom";
import routes from "./Routes/Routes";

const queryClient = new QueryClient();

function App() {
  const pages = useRoutes(routes);
  return (
    <QueryClientProvider client={queryClient}>
      {pages}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
