import { NavLink } from "react-router-dom";
import "../../Styles/navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <p>
        <span>{"<"}J</span>askaran Singh<span>{"/>"}</span>
      </p>
      <div>
        <NavLink to="" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Me
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Skills
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Work
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Experience
        </NavLink>
      </div>
      <button>
        <a
          href="mailto:dhillonjaskaran4486@gmail.com?subject=Hi! Jaskaran"
          target="_blank"
        >
          Contact Me
        </a>
      </button>
    </div>
  );
}

export default NavBar;
