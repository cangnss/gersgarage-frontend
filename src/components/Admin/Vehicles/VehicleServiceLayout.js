import { Outlet } from "react-router-dom";

export default function VehicleServiceLayout() {
  return (
    <div>
      <div className="text-left ml-10 my-auto">
        <p className="text-2xl font-semibold">Vehicle Dashboard</p>
      </div>
      <Outlet />
    </div>
  );
}
