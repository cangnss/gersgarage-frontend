import { Link } from "react-router-dom";
import logo from "../../images/repaircar.png";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, dispatch } = useAuth();
  console.log(user);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth/login");
  };

  return (
    <div className="w-full flex flex-row justify-around items-center border-b-2 border-blue-600">
      <div>
        <img src={logo} alt="repair" width="150" />
      </div>
      <div className="flex flex-row">
        <ul className="flex flex-row">
          <Link to="/">
            <li className="font-semibold mr-2 hover:text-gray-50">Home</li>
          </Link>
          {user ? (
            <Link to="/user">
              <li className="font-semibold mr-2 hover:text-gray-50">
                Services
              </li>
            </Link>
          ) : null}

          <Link to="/about">
            <li className="font-semibold mr-2 hover:text-gray-50">About</li>
          </Link>
          <Link to="/contact">
            <li className="font-semibold mr-2 hover:text-gray-50">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-row mt-1">
        {user ? (
          <>
            <button
              className="p-1 w-24 mr-2 font-semibold text-white bg-red-600 border-2 border-red-600 rounded-lg"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="w-full">
              <Link to="/auth/login">
                <button className="p-1 w-24 mr-2 font-semibold text-white bg-blue-600 border-2 border-blue-600 rounded-lg">
                  Login
                </button>
              </Link>
            </div>
            <div className="">
              <Link to="/auth/signup">
                <button className="p-1 w-24 font-semibold text-black bg-white rounded-lg border-2 border-blue-600">
                  Register
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
