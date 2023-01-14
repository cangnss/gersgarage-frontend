import { useEffect, useState } from "react";
import { getActiveVehiclesSchedules } from "../../../service/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAuth } from "../../../context";

export default function VehiclesInService() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeVehicles, setActiveVehicles] = useState();

  let i = 0;

  useEffect(() => {
    getActiveVehiclesSchedules()
      .then((res) => {
        console.log(res);
        setActiveVehicles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full">
      <div className="border-2 shadow-lg rounded-lg">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <AiOutlineArrowLeft
                className="text-2xl"
                onClick={() => {
                  navigate(-1);
                }}
              />
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Firstname
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Lastname
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Brand
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Model
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        KM
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Book Date
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                      >
                        Vehicle Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeVehicles?.map((vehicle) => {
                      return (
                        <tr class="border-b" key={vehicle.id}>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {++i}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {vehicle.firstname}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {vehicle.lastname}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {vehicle.brand}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {vehicle.model}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {vehicle.km}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {new Date(vehicle.bk_Date).getMonth() +
                              1 +
                              " - " +
                              new Date(vehicle.bk_Date).getDay() +
                              " - " +
                              new Date(vehicle.bk_Date).getFullYear()}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {vehicle.vehicle_Status}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Link
                              to={`/admin/vehicles-in-service/${vehicle.id}`}
                            >
                              <button className="p-2 border-2 bg-sky-500 text-white font-semibold rounded-lg border-sky-500">
                                Update Vehicle
                              </button>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
