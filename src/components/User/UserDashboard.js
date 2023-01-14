import { GiAutoRepair } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function UserDashboard() {

  return (
    <div className="w-full">
      <div className="text-left ml-24">
        <p className="text-5xl font-semibold">User</p>
      </div>
      <div className="flex flex-row flex-wrap justify-around my-5 mx-5">
        <Link to="/user/service-request">
          <div className="p-20 flex flex-col shadow-lg border-2 rounded-lg">
            <div className="flex justify-center">
              <GiAutoRepair className="text-6xl" />
            </div>
            <div>
              <p className="text-xl font-semibold">Send Vehicle To Service</p>
            </div>
          </div>
        </Link>
        <Link to="/user/add-vehicle">
          <div className="p-20 flex flex-col shadow-lg border-2 rounded-lg">
            <div className="flex justify-center">
              <GiAutoRepair className="text-6xl" />
            </div>
            <div>
              <p className="text-xl font-semibold">Add Vehicle</p>
            </div>
          </div>
        </Link>
        <Link to="/user/vehicles">
          <div className="p-20 flex flex-col shadow-lg border-2 rounded-lg">
            <div className="flex justify-center">
              <GiAutoRepair className="text-6xl" />
            </div>
            <div>
              <p className="text-xl font-semibold">My Vehicles</p>
            </div>
          </div>
        </Link>
        <Link to="/user/comments">
          <div className="p-20 flex flex-col shadow-lg border-2 rounded-lg">
            <div className="flex justify-center">
              <GiAutoRepair className="text-6xl" />
            </div>
            <div>
              <p className="text-xl font-semibold">Comments</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
