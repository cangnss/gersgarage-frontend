import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getActiveUserVehiclesInService } from "../../../service/api";
import { useAuth } from "../../../context";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function UserVehiclesInService() {
  let i = 0;
  const navigate = useNavigate();
  const { user } = useAuth();
  const [vehiclesInService, setVehiclesInService] = useState();

  useEffect(() => {
    getActiveUserVehiclesInService(user.id)
      .then((res) => {
        console.log(res);
        setVehiclesInService(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                        Description
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
                    {vehiclesInService?.map((vehicle) => {
                      return (
                        <tr class="border-b" key={vehicle.id}>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {++i}
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
                            {vehicle.description}
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
                            {vehicle.status === "PAID" ? (
                              <span className="p-2 border-2 bg-green-700 text-white font-semibold rounded-lg border-green-700">
                                {vehicle.status}
                              </span>
                            ) : (
                              <Link
                                to={`/admin/vehicles-in-service/${vehicle.id}`}
                              >
                                <button className="p-2 border-2 bg-sky-500 text-white font-semibold rounded-lg border-sky-500">
                                  Pay Invoice
                                </button>
                              </Link>
                            )}
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
