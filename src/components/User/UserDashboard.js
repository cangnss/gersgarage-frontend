import { GiAutoRepair } from "react-icons/gi"
import { Link } from "react-router-dom"
export default function UserDashboard(){
    return(
        <div className="w-full">
            <div className="text-left">
                <p className="text-5xl font-semibold">User</p>
            </div>
            <div className="flex flex-row justify-around my-5 mx-5">
                <Link to="/user/service-request">
                    <div className="p-20 flex flex-col shadow-lg border-2 rounded-lg">
                        <div className="flex justify-center">
                            <GiAutoRepair className="text-6xl" />
                        </div>
                        <div>
                            <p className="text-2xl font-semibold">Create Service Request</p>
                        </div>
                    </div>
                </Link>
                <Link to="/user/repairs">
                    <div className="p-20 flex flex-col shadow-lg border-2 rounded-lg">
                        <div className="flex justify-center">
                            <GiAutoRepair className="text-6xl" />
                        </div>
                        <div>
                            <p className="text-2xl font-semibold">My Repairs</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}