import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { postComments } from "../../../service/api";
import { useAuth } from "../../../context";
import Success from "../../Success"
import Error from "../../Error"

export default function AddEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { user } = useAuth();

  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });


  if (user.role !== "USER") {
    return <Navigate to="/" />;
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      customerId: user.id,
      placeId: 1,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    if (
      formData.text === "" &&
      typeof formData.text === null &&
      typeof formData.text === undefined
    ) {
      setNotify({
        success: false,
        error: true,
        message: "Input is not correct. Please enter a correct value.",
      });
      setTimeout(() => {
        setNotify({ error: false });
      }, 3000);
    }
    postComments(formData)
      .then((response) => {
        console.log("added comment:", response);
        if (response.status === 201) {
          setNotify({
            success: true,
            error: false,
            message: "New comment added.",
          });
          setTimeout(() => {
            setNotify({ success: false });
          }, 2000);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-full">
      {notify.success ? <Success message={notify.message} /> : null}
      {notify.error ? <Error message={notify.message} />: null}
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 px-10">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <AiOutlineArrowLeft
                className="text-2xl"
                onClick={() => {
                  navigate(-1);
                }}
              />
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <input
                      type="text"
                      className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                      name="text"
                      defaultValue={formData?.text || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold"
                    >
                      Send Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
