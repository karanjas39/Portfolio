import { NavLink } from "react-router-dom";
import "../../Styles/navbar.scss";
import { useState } from "react";

function NavBar() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="navbar">
      <p>
        <span>{"<"}J</span>askaran Singh<span>{"/>"}</span>
      </p>
      <p onClick={() => setIsHidden(false)}>
        <i className="fa-solid fa-bars menu-bar"></i>
      </p>
      {!isHidden && (
        <div className="blur" onClick={() => setIsHidden(true)}></div>
      )}
      <div className={!isHidden ? "open" : ""}>
        <p onClick={() => setIsHidden(true)}>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </p>
        <p onClick={() => setIsHidden(true)}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </p>
        <p onClick={() => setIsHidden(true)}>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Skills
          </NavLink>
        </p>
        <p onClick={() => setIsHidden(true)}>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Work
          </NavLink>
        </p>
        <p onClick={() => setIsHidden(true)}>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Experience
          </NavLink>
        </p>
        <a
          href="mailto:dhillonjaskaran4486@gmail.com?subject=Hi! Jaskaran"
          target="_blank"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default NavBar;
