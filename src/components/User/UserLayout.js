import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export default function UserLayout() {
  const { user } = useAuth();
  if (user.role !== "USER") {
    return <Navigate to="/" />;
  }
  return (
    <div>
        <div className="text-left ml-24">
            <p className="text-5xl font-semibold">User Dashboard</p>
        </div>
      <Outlet />
    </div>
  );
}
