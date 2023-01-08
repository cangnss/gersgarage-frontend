import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { postComments } from "../../../service/api";
import { useAuth } from "../../../context";

export default function AddEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { user } = useAuth();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, customerId: user.id, placeId: 1 });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // postComments(formData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div className="w-full">
      <div className="border-2 shadow-lg rounded-lg">
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
                      defaultValue={formData?.firstname || ""}
                      onChange={handleChange}
                    />
                    <input type="text" name="placeId" value="1" />
                  </div>
                  <div>
                    <button type="submit">Send Comment</button>
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
