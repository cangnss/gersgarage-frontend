export default function Login() {
  return (
    <div className="w-full mt-10">
      <div className="mx-auto w-96 p-10 border-2 rounded-lg shadow-lg flex flex-col justify-center border-blue-600">
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
              />
            </div>
            <div className="mb-5 mr-5">
              <input
                type="password"
                className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
