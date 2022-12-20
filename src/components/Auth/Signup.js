export default function Signup() {
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
          <div className="mt-10">
            <label className="font-semibold">Email: </label>
          </div>
          <div className="mt-8">
            <label className="font-semibold">Password: </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5">
            <input
              type="text"
              className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              name="firstname"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              name="lastname"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              name="email"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              name="password"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold">
          Signup
        </button>
      </div>
    </div>
  );
}
