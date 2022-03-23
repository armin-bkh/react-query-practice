import { QueryClientProvider, QueryClient } from "react-query";
import { useRoutes } from "react-router-dom";
import routes from "./Routes/Routes";

const queryClient = new QueryClient();

function App() {
  const pages = useRoutes(routes);
  return (
    <QueryClientProvider client={queryClient}>{pages}</QueryClientProvider>
  );
}

export default App;
