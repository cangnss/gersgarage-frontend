export default function Contact() {
  return (
    <div className="p-5 w-96 mx-auto mt-10 shadow-lg border-2 border-blue-600 rounded-lg">
      <div className="flex flex-row">
        <div className="mt-1 flex flex-col">
          <div className="mb-5 mr-2">
            <label className="font-semibold">Full Name: </label>
          </div>
          <div className="mt-5">
            <label className="font-semibold">E-Mail: </label>
          </div>
          <div className="mt-10">
            <label className="font-semibold">Message: </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-5">
            <input
              type="text"
              className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              name="fullname"
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
            <textarea
              type="message"
              className="w-48 h-10 border-2 border-slate-200 rounded-lg"
              name="message"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="w-32 p-1 rounded-lg border-2 border-blue-600 bg-blue-600 text-white font-semibold">
          Send
        </button>
      </div>
    </div>
  );
}
