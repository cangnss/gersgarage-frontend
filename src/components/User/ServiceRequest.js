import { useEffect, useState } from "react";
import {
  getPlaceServicesData,
  getStocks,
  getUserVehicles,
  postSchedules,
} from "../../service/api";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Success from "../Success";
import Error from "../Error";

export default function ServiceRequest() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stocks, setStocks] = useState();
  const [services, setServices] = useState();
  const [userVehicles, setUserVehicles] = useState();
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });

  if (user == false) navigate("/auth/login");

  if (user.role !== "USER") navigate("/auth/login");

  useEffect(() => {
    getStocks().then((res) => {
      console.log(res.data);
      setStocks(res.data);
    });

    getUserVehicles(user.id)
      .then((response) => {
        setUserVehicles(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getPlaceServicesData()
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(
    "stocks:",
    stocks,
    "vehicles:",
    userVehicles,
    "services:",
    services
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      customerId: user?.id,
      placeId: 1,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    postSchedules(formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setNotify({
            success: true,
            error: false,
            message: "Vehicle Send Service!",
          });
          setTimeout(() => {
            setNotify({ success: false });
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="text-center mx-auto p-14 my-10">
      {notify.success ? <Success message={notify.message} /> : null}
      {notify.error ? <Error message={notify.message} /> : null}
      <div className="border-2 rounded-lg shadow-lg">
      <AiOutlineArrowLeft
          className="text-2xl"
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className="my-10">
          <form onSubmit={handleSubmit}>
            <div className="p-2">
              <div className="p-2">
                <label className="p-1 font-semibold text-lg mr-8">
                  My Vehicle:
                </label>
                <select onChange={handleChange} name="vehicleId">
                  {userVehicles?.map((vehicle) => {
                    return (
                      <option value={vehicle.id}>
                        {vehicle.brand} {vehicle.model}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="p-2">
                <label className="p-1 font-semibold text-lg mr-8">
                  Description
                </label>
                <textarea name="description" onChange={handleChange} />
              </div>
              <div className="p-2">
                {/* <div className="p-2">
                  <label className="p-1 font-semibold text-lg mr-8">
                    Ger's Garage Stocks:
                  </label>
                  <select onChange={handleChange} name="place_service_type">
                    {stocks?.map((stock) => {
                      return (
                        <option value={stock.pcs_price}>
                          {stock.item} - {stock.pcs_price}
                        </option>
                      );
                    })}
                  </select>
                </div> */}
                <div className="p-2">
                  <label className="p-1 font-semibold text-lg mr-8">
                    Ger's Garage Services:
                  </label>
                  <select onChange={handleChange} name="place_service_type">
                    {services?.map((service) => {
                      return (
                        <option value={service.id} name="place_service_type">
                          {service.type}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="p-2">
                  <label className="p-1 font-semibold text-lg mr-8">Date</label>
                  <input type="date" name="bkDate" onChange={handleChange} />
                </div>
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
    </div>
  );
}
