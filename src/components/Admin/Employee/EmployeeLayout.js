import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function EmployeeLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="ml-9">
          <p className="font-semibold text-2xl">Employee Dashboard</p>
        </div>
        <div className="mr-10 mb-1">
          <Link to="/admin/employee/adddemployee">
            <button className="p-2 border-2 bg-blue-600 text-white font-semibold rounded-lg border-blue-600">
              Add Employee
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
