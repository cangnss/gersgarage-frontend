import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { putActiveVehicleStatus } from "../../../service/api";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Success from "../../Success";
import Error from "../../Error";

export default function UpdateVehicleService() {
  const navigate = useNavigate();
  const params = useParams();
  const scheduleId = params.id;
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });
  console.log(scheduleId);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    putActiveVehicleStatus(scheduleId, formData)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          setNotify({
            success: true,
            error: false,
            message: "Vehicle Status Updated!",
          });
          setTimeout(() => {
            setNotify({ success: false });
            navigate("/admin/vehicles-in-service");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full mt-10">
      {notify.success ? <Success message={notify.message} /> : null}
      {notify.error ? <Error message={notify.message} /> : null}
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
        <AiOutlineArrowLeft
          className="text-2xl"
          onClick={() => {
            navigate(-1);
          }}
        />
        <form onSubmit={updateHandler}>
          <div className="flex flex-row">
            <div className="mt-1 flex flex-col">
              <div className="mb-5 mr-2">
                <label className="font-semibold">Vehicle Status: </label>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-5">
                <select onChange={handleChange} name="vehicleStatus">
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  <option value="FIXED">FIXED</option>
                  <option value="COLLECTED">COLLECTED</option>
                  <option value="UNREPAIRABLE">UNREPAIRABLE</option>
                </select>
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
