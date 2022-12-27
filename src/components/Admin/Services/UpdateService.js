import { useEffect, useState } from "react";
import {
  getPlaceServiceData,
  postPlaceServiceData,
  putEmployeeData,
  putPlaceServiceData,
} from "../../../service/api";
import { useParams } from "react-router-dom";

export default function UpdateService() {
  const params = useParams();
  const id = params?.id;
  const [formData, setFormData] = useState({
    type: "",
    price: 0,
  });

  useEffect(() => {
    getPlaceServiceData(id).then((res) => {
      setFormData({
        type: res?.data?.type,
        price: res?.data?.price,
      });
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putPlaceServiceData(id, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("formdata", formData);

  return (
    <div className="w-full mt-10">
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
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
                <input
                  type="hidden"
                  name="placeId"
                  defaultValue={formData?.placeId || 1}
                  value="1"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold"
            >
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
