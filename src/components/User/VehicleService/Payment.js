import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Success from "../../Success";

export default function Payment() {
  const navigate = useNavigate();
  const [scheduleInfo, setScheduleInfo] = useState();
  const [formData, setFormData] = useState({});
  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const [sum, setSum] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    
  }

  useEffect(() => {
    setSum(parseFloat(item1) + parseFloat(item2));
  }, [item1, item2]);

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
          </div>
          <div>
            <button type="submit" className="border-2 bg-blue-600 shadow-lg p-2 rounded-lg border-blue-600 text-white font-semibold">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
