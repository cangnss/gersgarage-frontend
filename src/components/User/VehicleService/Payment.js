import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Success from "../../Success";
import {
  getPricePlaceService,
  getStocks,
  postUserVehiclePayment,
} from "../../../service/api";
import { useAuth } from "../../../context";
import Error from "../../Error";

export default function Payment() {
  const navigate = useNavigate();

  const params = useParams();
  const scheduleId = params.id;
  const { user } = useAuth();
  const [stocks, setStocks] = useState();
  const [scheduleInfo, setScheduleInfo] = useState();

  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();

  useEffect(() => {
    getStocks()
      .then((res) => {
        setStocks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getPricePlaceService(scheduleId)
      .then((res) => {
        console.log(res);
        setScheduleInfo({ price: res.data.price, type: res.data.type });
        setItem2(scheduleInfo?.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [scheduleInfo?.price]);

  if (user.role !== "USER") {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let sum = parseFloat(item1) + item2;
    console.log(sum);

    const data = {
      amount: sum,
      customerId: user.id,
      placeId: 1,
      status: "PAID",
      scheduleId: scheduleId,
    };

    postUserVehiclePayment(data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setNotify({
            success: true,
            error: false,
            message:
              "The payment transaction has been completed successfully.!",
          });
          setTimeout(() => {
            setNotify({ success: false });
            navigate("/user/service-request/user-vehicles-in-service");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          setNotify({
            success: false,
            error: true,
            message: "The payment has already been made. Cannot be paid again!",
          });
          setTimeout(() => {
            setNotify({ success: false });
          }, 2000);
        }
      });
  };

  return (
    <div className="w-full my-10">
      {notify.success ? <Success message={notify.message} /> : null}
      {notify.error ? <Error message={notify.message} /> : null}
      <div className="p-10 border-2 rounded-lg shadow-lg text-center mx-auto">
        <AiOutlineArrowLeft
          className="text-2xl"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h4 className="font-semibold text-3xl">Your Invoice</h4>
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">
                Service:{" "}
                <span className="font-semibold">
                  {scheduleInfo?.type} - {scheduleInfo?.price}
                </span>
              </label>
            </div>
            <div className="p-2">
              <label className="p-1 font-semibold text-lg mr-8">Stocks:</label>
              <select
                name="stock"
                onChange={(e) => {
                  setItem1(e.target.value);
                }}
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                {stocks?.map((stock) => {
                  return <option value={stock.pcs_price}>{stock.item}</option>;
                })}
              </select>
            </div>
            <div className="p-2 flex justify-center">
              <span className="font-semibold text-2xl">
                Total:{item1 > 0 ? parseFloat(item1) + item2 : item2}
              </span>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="border-2 bg-blue-600 shadow-lg p-2 rounded-lg border-blue-600 text-white font-semibold"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
