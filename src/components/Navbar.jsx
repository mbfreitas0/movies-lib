import { Link } from "react-router-dom";
//import { BicameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <form action="">
        <input type="text" placeholder="Busque um fime" />
        <button type="submit"></button>
      </form>
    </nav>
  );
};
export default Navbar;

