export default function ServiceRequest() {
  return (
    <div className="w-full my-10">
      <div className="p-40 border-2 rounded-lg shadow-lg">
        <div className="p-2">
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-5">
              Vehicle License:
            </label>
            <input
              type="text"
              name="vehicleLicense"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle Name:
            </label>
            <input
              type="text"
              name="vehicleLicense"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle Brand:
            </label>
            <input
              type="text"
              name="vehicleLicense"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle Year:
            </label>
            <input
              type="number"
              name="v_year"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle Model:
            </label>
            <input
              type="text"
              name="model"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle Type:
            </label>
            <input
              type="text"
              name="vehicleLicense"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-5">
              Vehicle Engine Type:
            </label>
            <input
              type="text"
              name="vehicleLicense"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle KM:
            </label>
            <input
              type="number"
              name="km"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
          <div className="p-2">
            <label className="p-1 font-semibold text-lg mr-8">
              Vehicle KM:
            </label>
            <input
              type="text"
              name="vehicleLicense"
              className="border-2 bg-gray-300 rounded-lg shadow-sm border-black"
            />
          </div>
        </div>
        <div>
          <button className="border-2 bg-blue-600 shadow-lg p-2 rounded-lg border-blue-600 text-white font-semibold">
            Send Service
          </button>
        </div>
      </div>
    </div>
  );
}
