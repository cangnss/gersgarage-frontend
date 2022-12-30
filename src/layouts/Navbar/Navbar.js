import { Link } from "react-router-dom";
import logo from "../../images/repaircar.png"

export default function Navbar(){
    return(
        <div className="w-full flex flex-row justify-around items-center border-b-2 border-blue-600">
            <div>
                <img src={logo} alt="repair" width="150" />
            </div>
            <div className="flex flex-row">
                <ul className="flex flex-row">
                    <Link to="/">
                        <li className="font-semibold mr-2 hover:text-gray-50">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="font-semibold mr-2 hover:text-gray-50">About</li>
                    </Link>
                    <Link to="/contact">
                        <li className="font-semibold mr-2 hover:text-gray-50">Contact</li>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-row mt-1">
                <div className="w-full">
                    <Link to="/auth/login">
                        <button className="p-1 w-24 mr-2 font-semibold text-white bg-blue-600 border-2 border-blue-600 rounded-lg">Login</button>
                    </Link>
                </div>
                <div className="">
                    <Link to="/auth/signup">
                        <button className="p-1 w-24 font-semibold text-black bg-white rounded-lg border-2 border-blue-600">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}