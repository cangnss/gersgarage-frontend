import { useEffect, useState } from "react";
import { getUserVehicles } from "../../service/api";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState();
  const customer_id = 12;
  let i = 0;
  useEffect(() => {
    getUserVehicles(customer_id).then((res) => {
      setVehicles(res.data);
    });
  }, []);

  return (
    <div>
      {vehicles?.map((vehicle) => {
        return (
          <div className="w-full">
            <div className="border-2 shadow-lg rounded-lg">
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-10">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
        );
      })}
    </div>
  );
}
