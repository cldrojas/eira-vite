import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="navbar-NavLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
