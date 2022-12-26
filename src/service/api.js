import axios from "axios"

export const getEmployees = async () => {
    const employees = await axios.get("http://localhost:8080/employees")
    if (employees == null) {
        return {
            status: 400,
            message: "No employees"
        }   
    }else{
        return employees
    }
}