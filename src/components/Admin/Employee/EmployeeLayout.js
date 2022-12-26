import { Outlet } from "react-router-dom";

export default function EmployeeLayout(){
    return(
        <div>
            <div>
                <p className="font-semibold text-2xl">Employee Dashboard</p>
            </div>
            <Outlet />
        </div>
    )
}