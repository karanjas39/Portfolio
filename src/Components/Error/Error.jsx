import NavBar from "../../Components/Navbar/NavBar";
import "../../Styles/error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <NavBar />
      <div className="error">
        <p>Something went wrong!!</p>
        <Link to="/">
          Go to Home <i class="fa-solid fa-house"></i>
        </Link>
      </div>
    </>
  );
}
