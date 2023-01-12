import { Outlet } from "react-router-dom"
import { useAuth } from "../../context"

export default function AdminLayout(){


    return(
        <div>
            <div className="text-left ml-10 my-auto">
                <p className="text-2xl font-semibold">Admin Dashboard</p>
            </div>
                <Outlet />
        </div>
    )
}