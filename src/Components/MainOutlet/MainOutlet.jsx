import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";

function MainOutlet() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainOutlet;
