import { useEffect } from "react"
import { getSchedules } from "../../../service/api"

export default function VehiclesInService(){
    useEffect(()=>{
        getSchedules()
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])
    return(
        <div>
            sadas
        </div>
    )
}