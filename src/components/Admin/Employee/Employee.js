import { useEffect, useState } from "react";
import { deleteEmployeeData, getEmployeeData } from "../../../service/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAuth } from "../../../context";

export default function Employee() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(null);
  let i = 0;

  const { user } = useAuth();
  useEffect(() => {
    getEmployeeData()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }



  const handleDelete = (id) => {
    deleteEmployeeData(id)
      .then((res) => {
        console.log(res.data);
        setEmployees(employees.filter((e) => e.id !== id));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.log(employees);
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
                        Salary
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees?.map((employee) => {
                      return (
                        <tr class="border-b" key={employee.id}>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {++i}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {employee.firstname}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {employee.lastname}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {employee.salary}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Link to={`/admin/employee/${employee.id}`}>
                              <button className="p-2 border-2 bg-sky-500 text-white font-semibold rounded-lg border-sky-500">
                                Update Employee
                              </button>
                            </Link>
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button
                              className="p-2 border-2 bg-red-600 text-white font-semibold rounded-lg border-red-600"
                              onClick={() => {
                                handleDelete(employee.id);
                              }}
                            >
                              Delete Employee
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
