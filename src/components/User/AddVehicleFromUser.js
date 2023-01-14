import { useState } from "react";
import { postVehicle } from "../../service/api";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAuth } from "../../context";
import Success from "../Success";

export default function AddVehicleFromUser() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const customerId = user?.id
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({
    status: 0,
    message: "",
  });
  if (user.role !== "USER") {
    return <Navigate to="/" />;
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, customerId: customerId });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postVehicle(formData)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setNotify({
            success: true,
            error: false,
            message: "Added New Vehicle!",
          });
          setTimeout(() => {
            setNotify({ success: false });
            navigate('/user/vehicles')
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
  };
  console.log(user);
  return (
    <div className="w-full my-10">
      {notify.success ? <Success message={notify.message} /> : null}
      <div className="p-10 border-2 rounded-lg shadow-lg text-center mx-auto">
        <AiOutlineArrowLeft
          className="text-2xl"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h4 className="font-semibold text-3xl">Add Your Vehicle</h4>
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">
                Vehicle Brand:
              </label>
              <input
                type="text"
                name="brand"
                className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
                defaultValue={formData?.brand || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">
                Vehicle Model:
              </label>
              <input
                type="text"
                name="model"
                className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
                defaultValue={formData?.model || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">
                Vehicle Year:
              </label>
              <input
                type="number"
                name="v_year"
                className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
                defaultValue={formData?.v_year || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">
                Vehicle Type:
              </label>
              <input
                type="text"
                name="vehicleType"
                className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
                defaultValue={formData?.vehicleType || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-5">
                Vehicle Engine Type:
              </label>
              <input
                type="text"
                name="vehicleEngineType"
                className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
                defaultValue={formData?.vehicleEngineType || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">
                Vehicle KM:
              </label>
              <input
                type="number"
                name="km"
                step="0.01"
                className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
                defaultValue={formData?.km || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <button className="border-2 bg-blue-600 shadow-lg p-2 rounded-lg border-blue-600 text-white font-semibold">
              Send Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
