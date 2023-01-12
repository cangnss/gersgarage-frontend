import { useState } from "react";
import { register } from "../../service/api";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { user } = useAuth();
  
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(formData);
  return (
    <div className="p-5 w-96 mx-auto mt-10 shadow-lg border-2 border-blue-600 rounded-lg">
      <div className="flex flex-row">
        <div className="mt-1 flex flex-col">
          <div className="mb-5 mr-2">
            <label className="font-semibold">Firstname: </label>
          </div>
          <div className="mt-5">
            <label className="font-semibold">Lastname: </label>
          </div>
          <div className="mt-8">
            <label className="font-semibold">Username: </label>
          </div>
          <div className="mt-10">
            <label className="font-semibold">Email: </label>
          </div>
          <div className="mt-8">
            <label className="font-semibold">Password: </label>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="mb-5">
              <input
                type="text"
                className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                name="firstname"
                defaultValue={formData?.firstname || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                name="lastname"
                defaultValue={formData?.lastname || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                name="username"
                defaultValue={formData?.username || ""}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                name="email"
                defaultValue={formData?.email || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="w-48 h-10 border-2 border-slate-200 rounded-lg"
                name="password"
                defaultValue={formData?.password || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
