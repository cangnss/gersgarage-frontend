import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../../../service/api";

export default function UpdateEmployee() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    salary: 0.0,
  });

  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    getEmployee(id)
      .then((res) => {
        setFormData({
          firstname: res?.data?.firstname,
          lastname: res?.data?.lastname,
          salary: res?.data?.salary,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(formData);

  const handleChange = (event) => {
    const { firstname, value} = event.target;
    setFormData({ ...formData, [firstname] : value});
    console.log("firstname:", firstname, "value:", value);
  }
  const updateHandler = (e) => {
    e.preventDefault();
    console.log(
      "firstname:",
      formData.firstname,
      "lastname:",
      formData.lastname,
      "salary:",
      formData.salary
    );
  };
  return (
    <div className="w-full mt-10">
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
        <form onSubmit={updateHandler}>
          <div className="flex flex-row">
            <div className="mt-1 flex flex-col">
              <div className="mb-5 mr-2">
                <label className="font-semibold">Firstname: </label>
              </div>
              <div className="mt-5">
                <label className="font-semibold">Lastname: </label>
              </div>
              <div className="mt-10">
                <label className="font-semibold">Salary: </label>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="firstname"
                  value={formData?.firstname || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="lastname"
                  value={formData?.lastname || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="salary"
                  value={formData?.salary || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
