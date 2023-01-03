import { useState } from "react";
import { postVehicle } from "../../service/api";

export default function AddVehicleFromUser() {
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postVehicle(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
  };
  return (
    <div className="w-full my-10">
      <div className="p-40 border-2 rounded-lg shadow-lg">
        <h4 className="font-semibold text-3xl">Add Your Vehicle</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="customerId"
            defaultValue={formData?.customerId || ""}
            onChange={handleChange}
          />
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
