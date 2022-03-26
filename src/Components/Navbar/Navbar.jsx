import { NavLink } from "react-router-dom";

const links = [
  { id: 1, to: "/", title: "home" },
  {
    id: 2,
    to: "/superheroes",
    title: "superheroes",
  },
  {
    id: 3,
    to: "/rqsuperheroes",
    title: "rqsuperheroes",
  },
  {
    id: 4,
    to: "/rqparallel",
    title: "rqparallel",
  },
  {
    id: 5,
    to: "/rqdynamicSuperheroes",
    title: "rqdynamicSuperheroes",
  },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center p-3 shadow">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  "capitalize px-3 " + (isActive ? "text-blue-700" : "")
                }
                to={link.to}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
