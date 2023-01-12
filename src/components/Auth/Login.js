import { useState } from "react";
import { login } from "../../service/api";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import Success from "../../components/Success";
import Error from "../../components/Error";

export default function Login() {
  const { user } = useAuth();

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const [formData, setFormData] = useState({});
  const { dispatch } = useAuth();

  const [notify, setNotify] = useState({
    success: false,
    error: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData)
      .then((response) => {
        console.log("login res:", response);
        console.log(response.data);
        if (response.status === 200) {
          setNotify({
            success: true,
            error: false,
            message: "Successfully login. Navigate home page..",
          });
          setTimeout(() => {
            setNotify({ success: false });
          }, 1500);
        }
        return response?.data;
      })
      .then((data) => {
        const token = data.token;
        const user = {
          id: data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          role: data.role,
        };
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user: user, token: token },
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("err", error);
        if (error) {
          setNotify({
            success: false,
            error: true,
            message: "E-mail or password is not correct.",
            alert: "success",
          });
          setTimeout(() => {
            setNotify({ error: false });
          }, 3000);
        }
      });
  };
  console.log("formdata:", formData);
  return (
    <div className="w-full mt-10">
      {notify.success ? <Success message={notify.message} /> : null}
      {notify.error ? <Error message={notify.message} /> : null}
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
            <button
              type="submit"
              className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
