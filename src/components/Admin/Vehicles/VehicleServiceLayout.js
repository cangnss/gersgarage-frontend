import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function VehicleServiceLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="text-left ml-10 my-auto">
        <p className="text-2xl font-semibold">Vehicle Dashboard</p>
      </div>
      <Outlet />
    </div>
  );
}
