import { useEffect, useState } from "react";
import { GrServices } from "react-icons/gr";
import { getPlaceServicesData } from "../../service/api";
import Error from "../../components/Error";
import Success from "../../components/Success"

export default function ServiceTypes() {
  const [services, setServices] = useState();
  const [notify, setNotify] = useState({
    show: false,
    message: "",
    alert: "",
  });
  useEffect(() => {
    getPlaceServicesData()
      .then((res) => {
        console.log("res service types:", res);
        if (res.status === 200) {
          setNotify({ show: true, message: "Services", alert: "success" });
          setServices(res.data);
          setTimeout(() => {
            setNotify({ show: false });
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full">
      <h4 className="text-6xl text-left mx-24">Services</h4>
      {notify.show ? (
        <Success />
      ) : null}
      <div className="flex flex-row justify-around">
        {services?.map((service) => {
          return (
            <div
              className="p-24 w-auto my-10 shadow-lg rounded-lg border-2 flex flex-col justify-center items-center"
              key={service.id}
            >
              <div className="text-center mb-5">
                <GrServices className="text-6xl" />
              </div>
              <div className="">
                <p className="text-center font-semibold">{service.type}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
