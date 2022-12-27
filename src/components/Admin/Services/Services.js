import { useEffect, useState } from "react";
import {
  deletePlaceServiceData,
  getPlaceServicesData,
} from "../../../service/api";
import { Link } from "react-router-dom";

export default function Services() {
  let i = 0;
  const [services, setServices] = useState();
  useEffect(() => {
    getPlaceServicesData()
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    deletePlaceServiceData(id)
      .then((res) => {
        console.log(res.data);
        setServices(services.filter((s) => s.id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="w-full">
      <div className="border-2 shadow-lg rounded-lg">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                        Type
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
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {services?.map((service) => {
                      return (
                        <tr class="border-b" key={service.id}>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {++i}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {service.type}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {service.price}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Link to={`/admin/services/${service.id}`}>
                              <button className="p-2 border-2 bg-sky-500 text-white font-semibold rounded-lg border-sky-500">
                                Update Service
                              </button>
                            </Link>
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              className="p-2 border-2 bg-red-600 text-white font-semibold rounded-lg border-red-600"
                              onClick={() => {
                                handleDelete(service.id);
                              }}
                            >
                              Delete Service
                            </button>
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
