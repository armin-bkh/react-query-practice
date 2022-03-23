import HomePage from "../Pages/HomePage";
import RQSuperheroesPage from "../Pages/RQSuperheroesPage";
import SuperheroesPage from "../Pages/SuperheroesPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/superheroes", element: <SuperheroesPage /> },
  { path: "/rqsuperheroes", element: <RQSuperheroesPage /> },
];

export default routes;
