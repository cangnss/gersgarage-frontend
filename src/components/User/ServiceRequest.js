import { useEffect, useState } from "react";
import {
  getPlaceServicesData,
  getStocks,
  getUserVehicles,
} from "../../service/api";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export default function ServiceRequest() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stocks, setStocks] = useState();
  const [services, setServices] = useState();
  const [userVehicles, setUserVehicles] = useState();

  if (user == false) navigate("/auth/login");

  if(user.role !== 'USER') navigate("/auth/login");

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
  const handleSubmit = () => {};
  console.log(
    "stocks:",
    stocks,
    "vehicles:",
    userVehicles,
    "services:",
    services
  );

  const [item1, setItem1] = useState(0.0);
  const [item2, setItem2] = useState(0.0);
  const [sum, setSum] = useState(0.0);

  function handleChange1(event) {
    console.log("change1:", event.target.value);
    const selectedItem = stocks.find((i) => i.item === event.target.value);
    console.log("selectedItem price:",selectedItem.pcs_price);
    setItem1(selectedItem?.pcs_price);
    console.log("item1:", item1);
    setSum((prevState) => {
      console.log(prevState);
    //   return parseFloat(prevState) + parseFloat(item1);
    });
  }

  function handleChange2(event) {
    const selectedItem = services.find(
      (item) => item.type === event.target.value
    );
    setItem2(selectedItem.price);
    setSum((prevState) => {
      return parseFloat(prevState) + parseFloat(item2);
    });
  }
  return (
    <div className="w-full my-10">
      <div className="p-40 border-2 rounded-lg shadow-lg">
        <div className="bg-slate-400">
          <form onSubmit={handleSubmit}>
            <div className="p-2">
              <div className="p-2">
                <label className="p-1 font-semibold text-lg mr-8">
                  My Vehicle:
                </label>
                <select>
                  {userVehicles?.map((vehicle) => {
                    return (
                      <option value={vehicle.brand}>
                        {vehicle.brand} {vehicle.model}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="p-2">
                <label className="p-1 font-semibold text-lg mr-8">
                  Ger's Garage Stocks:
                </label>
                <select onChange={handleChange1}>
                  {stocks?.map((stock) => {
                    return (
                      <option value={stock.item}>
                        {stock.item} - {stock.pcs_price}
                      </option>
                    );
                  })}
                </select>
                <div className="p-2">
                  <label className="p-1 font-semibold text-lg mr-8">
                    Ger's Garage Services:
                  </label>
                  <select onChange={handleChange2}>
                    {services?.map((service) => {
                      return (
                        <option value={service.type}>{service.type}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="p-2">
                  <label className="p-1 font-semibold text-lg mr-8">Date</label>
                  <input type="date" />
                </div>
              </div>
              <p>Total: {sum}</p>
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
