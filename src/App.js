import { useRoutes } from "react-router-dom";
import routes from "./Routes/Routes";

function App() {
  const pages = useRoutes(routes);
  return pages;
}

export default App;
