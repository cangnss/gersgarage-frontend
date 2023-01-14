import { useEffect, useState } from "react";
import { getUserVehicles } from "../../service/api";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export default function Vehicles() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState();
  
  let i = 0;
  useEffect(() => {
    getUserVehicles(user.id).then((res) => {
      setVehicles(res.data);
    });
  }, []);
  if (user.role !== "USER") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="w-full">
        <div className="border-2 shadow-lg rounded-lg">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-10">
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
                          Km
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Year
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Engine Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicles?.map((vehicle) => {
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
                              {vehicle.v_year}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {vehicle.vehicleType}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {vehicle.vehicleEngineType}
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
    </div>
  );
}
