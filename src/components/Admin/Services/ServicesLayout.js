import { Outlet } from "react-router-dom";

export default function ServicesLayout(){
    return(
        <div>
            <p className="font-semibold text-2xl">Services Dashboard</p>
            <Outlet />
        </div>
    )
}