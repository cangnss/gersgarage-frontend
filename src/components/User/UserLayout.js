import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
        <div className="text-left ml-24">
            <p className="text-5xl font-semibold">User Dashboard</p>
        </div>
      <Outlet />
    </div>
  );
}