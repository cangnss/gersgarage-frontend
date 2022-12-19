export default function Login() {
  return (
    <div className="w-72 p-1 mt-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-2 border-blue-600">
      <div className="flex flex-row mb-2">
        <div className="p-1">
          <label> Email</label>
        </div>
        <div>
          <input
            type="email"
            className="w- h-10 border-2 border-slate-200 rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="p-1">
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            className="w- h-10 border-2 border-slate-200 rounded-lg"
          />
        </div>
      </div>
      <div>
        <button className="w-32 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold">Login</button>
      </div>
    </div>
  );
}
