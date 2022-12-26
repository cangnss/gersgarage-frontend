import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full">
      <div className="mx-auto p-10 border-2 rounded-lg shadow-lg">
        <div className="flex flex-row justify-around">
          <Link to="/admin/addemployee">
            <div className="flex flex-col text-center mx-auto rounded-lg border-2 border-blue-600">
              <div className="mt-5 text-center mx-auto ">
                <AiOutlineUserAdd className="text-2xl" />
              </div>
              <div className="p-5">
                <p className="font-semibold">Add Employee</p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col text-center mx-auto rounded-lg border-2 border-blue-600">
            <div className="mt-5 text-center mx-auto ">
              <AiOutlineUserAdd className="text-2xl" />
            </div>
            <div className="p-5">
              <p className="font-semibold">Add Employee</p>
            </div>
          </div>
          <div className="flex flex-col text-center mx-auto rounded-lg border-2 border-blue-600">
            <div className="mt-5 text-center mx-auto ">
              <AiOutlineUserAdd className="text-2xl" />
            </div>
            <div className="p-5">
              <p className="font-semibold">Add Employee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
