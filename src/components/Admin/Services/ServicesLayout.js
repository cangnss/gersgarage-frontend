import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function ServicesLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="flex flex-column justify-between">
        <div className="ml-9">
          <p className="font-semibold text-2xl">Services Dashboard</p>
        </div>
        <div className="mr-5 mb-1">
          <Link to="/admin/services/addservices">
            <button className="p-2 border-2 bg-blue-600 text-white font-semibold rounded-lg border-blue-600">
              Add Services
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
