import { useState } from "react";
import { postEmployeeData } from "../../../service/api";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import Success from "../../Success";
import { useAuth } from "../../../context";

export default function AddEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });
  const { user } = useAuth();

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, placeId: 1 });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postEmployeeData(formData)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setNotify({
            success: true,
            error: false,
            message: "New Employee Added!",
          });
          setTimeout(() => {
            setNotify({ success: false });
            navigate("/admin/employee");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("formdata", formData);
  return (
    <div className="w-full mt-10">
      {notify.success ? <Success message={notify.message} /> : null}
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
        <AiOutlineArrowLeft
          className="text-2xl"
          onClick={() => {
            navigate(-1);
          }}
        />
        <form onSubmit={handleSubmit}>
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
                  defaultValue={formData?.firstname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="lastname"
                  defaultValue={formData?.lastname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="salary"
                  defaultValue={formData?.salary || ""}
                  onChange={handleChange}
                />
                <input type="hidden" name="place_id" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
