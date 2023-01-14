import { useState } from "react";
import { postPlaceServiceData } from "../../../service/api";
import Success from "../../Success";
import Error from "../../Error";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export default function AddService() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, placeId: 1 });
  };
  const { user } = useAuth();

  if (user.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    postPlaceServiceData(formData)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setNotify({
            success: true,
            error: false,
            message: "Added New Service!",
          });
          setTimeout(() => {
            setNotify({ success: false });
            navigate("/admin/services");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("err", error);
        if (error) {
          setNotify({
            success: false,
            error: true,
            message: "Something went wrong!",
          });
          setTimeout(() => {
            setNotify({ error: false });
          }, 3000);
        }
      });
  };
  console.log("formdata", formData);

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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="mt-1 flex flex-col">
              <div className="mb-5">
                <label className="font-semibold">Service Name</label>
              </div>
              <div className="mb-3 mr-2">
                <label className="font-semibold">Price</label>
              </div>
            </div>
            <div>
              <div className="mb-5 mr-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="type"
                  defaultValue={formData?.type || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 mr-5">
                <input
                  type="text"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="price"
                  defaultValue={formData?.price || ""}
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
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
