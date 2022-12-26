import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../../../service/api";

export default function UpdateEmployee() {
  const [employee, setEmployee] = useState(null);
  const params = useParams();
  const id = params?.id;
  useEffect(() => {
    getEmployee(id)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(employee);
  return (
    <div className="w-full mt-10">
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
        
      </div>
    </div>
  );
}
