import { useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GrServices, GrUserWorker } from "react-icons/gr";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export default function Admin() {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (user.role !== "ADMIN") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div className="w-full">
      <div className="mx-24 my-5 border-2 rounded-lg shadow-lg">
        <div className="flex flex-row justify-around">
          <Link to="/admin/employee">
            <div className="flex flex-col text-center my-10 mx-10 rounded-lg border-2 border-blue-600">
              <div className="mt-5 text-center mx-auto ">
                <GrUserWorker className="text-2xl" />
              </div>
              <div className="p-5">
                <p className="font-semibold">Employee</p>
              </div>
            </div>
          </Link>
          <Link to="/admin/services">
            <div className="flex flex-col text-center my-10 mx-10 rounded-lg border-2 border-blue-600">
              <div className="mt-5 text-center mx-auto ">
                <GrServices className="text-2xl" />
              </div>
              <div className="p-5">
                <p className="font-semibold">Services</p>
              </div>
            </div>
          </Link>
          <Link to="/admin/vehicles-in-service">
            <div className="flex flex-col text-center my-10 mx-10 rounded-lg border-2 border-blue-600">
              <div className="mt-5 text-center mx-auto ">
                <AiOutlineUserAdd className="text-2xl" />
              </div>
              <div className="p-5">
                <p className="font-semibold">Vehicles In Service</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
