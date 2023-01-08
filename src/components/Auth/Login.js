import { useState } from "react";
import { login } from "../../service/api";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { dispatch } = useAuth();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData)
      .then((response) => {
        console.log(response.data);
        return response?.data
      })
      .then((data)=>{
        const token = data.token
        const user = { id: data.id, firstname: data.firstname, lastname: data.lastname, username: data.username, role: data.role}
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user: user, token:token },
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("formdata:", formData)
  return (
    <div className="w-full mt-10">
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row">
            <div className="mt-1 flex flex-col">
              <div className="mb-10">
                <label className="font-semibold">Email</label>
              </div>
              <div className="mb-3 mr-2">
                <label className="font-semibold">Password</label>
              </div>
            </div>
            <div>
              <div className="mb-5 mr-5">
                <input
                  type="email"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="email"
                  defaultValue={formData?.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 mr-5">
                <input
                  type="password"
                  className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                  name="password"
                  defaultValue={formData?.password || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
