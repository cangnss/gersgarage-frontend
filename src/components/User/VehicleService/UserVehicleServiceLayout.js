import { Link, Outlet } from "react-router-dom";

export default function UserVehicleServiceLayout() {
  return (
    <div>
      <div>
        <div className="mr-10 mb-1 flex justify-end">
          <Link to="/user/service-request/user-vehicles-in-service">
            <button className="p-2 border-2 bg-blue-600 text-white font-semibold rounded-lg border-blue-600">
              My Vehicles In Service
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
