import HomePage from "../Pages/HomePage";
import RQDependentPage from "../Pages/RQDependentPage";
import RQDynamicSuperheroesPage from "../Pages/RQDynamicSuperheroesPage";
import RQParallelPage from "../Pages/RQParallelPage";
import RQSuperheroDetailPage from "../Pages/RQSuperheroDetailPage";
import RQSuperheroesPage from "../Pages/RQSuperheroesPage";
import SuperheroesPage from "../Pages/SuperheroesPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/superheroes", element: <SuperheroesPage /> },
  {
    path: "/rqsuperheroes",
    element: <RQSuperheroesPage />,
  },
  { path: "/rqsuperheroes/:id", element: <RQSuperheroDetailPage /> },
  { path: "/rqparallel", element: <RQParallelPage /> },
  { path: "/rqdynamicSuperheroes", element: <RQDynamicSuperheroesPage /> },
  {
    path: "/rqdependent",
    element: <RQDependentPage email="arminbkh0921@yahoo.com" />,
  },
];

export default routes;
