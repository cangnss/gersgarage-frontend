import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider, useAuth } from "./context";
import Navbar from "./layouts/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Contact from "./components/Contact/Contact";
import Footer from "./layouts/Footer/Footer";
import Admin from "./components/Admin/Admin";
import AdminLayout from "./components/Admin/AdminLayout";
import AddEmployee from "./components/Admin/Employee/AddEmployee";
import EmployeeLayout from "./components/Admin/Employee/EmployeeLayout";
import Employee from "./components/Admin/Employee/Employee";
import UpdateEmployee from "./components/Admin/Employee/UpdateEmployee";
import ServicesLayout from "./components/Admin/Services/ServicesLayout";
import Services from "./components/Admin/Services/Services";
import AddService from "./components/Admin/Services/AddService";
import UpdateService from "./components/Admin/Services/UpdateService";
import UserLayout from "./components/User/UserLayout";
import UserDashboard from "./components/User/UserDashboard";
import AddVehicleFromUser from "./components/User/AddVehicleFromUser";
import Home from "./layouts/Home/Home";
import About from "./layouts/About/About";
import Vehicles from "./components/User/Vehicles";
import ServiceRequest from "./components/User/VehicleService/ServiceRequest";
import CommentsLayout from "./components/User/Comments/CommentsLayout";
import Comments from "./components/User/Comments/Comments";
import AddComment from "./components/User/Comments/AddComment";
import VehiclesInService from "./components/Admin/Vehicles/VehiclesInService";
import VehicleServiceLayout from "./components/Admin/Vehicles/VehicleServiceLayout";
import UpdateVehicleService from "./components/Admin/Vehicles/UpdateVehicleService";
import UserVehicleServiceLayout from "./components/User/VehicleService/UserVehicleServiceLayout";
import UserVehiclesInService from "./components/User/VehicleService/UserVehiclesInService";
import Payment from "./components/User/VehicleService/Payment";

function App() {
  return (
    <div className="App flex flex-col">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index={true} element={<Admin />} />
            <Route path="/admin/employee" element={<EmployeeLayout />}>
              <Route index={true} element={<Employee />} />
              <Route
                path="/admin/employee/adddemployee"
                element={<AddEmployee />}
              />
              <Route path="/admin/employee/:id" element={<UpdateEmployee />} />
            </Route>
            <Route path="/admin/services" element={<ServicesLayout />}>
              <Route index={true} element={<Services />} />
              <Route
                path="/admin/services/addservices"
                element={<AddService />}
              />
              <Route path="/admin/services/:id" element={<UpdateService />} />
            </Route>
            <Route
              path="/admin/vehicles-in-service"
              element={<VehicleServiceLayout />}
            >
              <Route index={true} element={<VehiclesInService />} />
              <Route
                path="/admin/vehicles-in-service/:id"
                element={<UpdateVehicleService />}
              />
            </Route>
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route index={true} element={<UserDashboard />} />
            <Route path="/user/add-vehicle" element={<AddVehicleFromUser />} />
            <Route
              path="/user/service-request"
              element={<UserVehicleServiceLayout />}
            >
              <Route index="true" element={<ServiceRequest />} />
              <Route
                path="/user/service-request/user-vehicles-in-service"
                element={<UserVehiclesInService />}
              />
              <Route
                path="/user/service-request/user-vehicles-in-service/:id"
                element={<Payment />}
              />
            </Route>
            <Route path="/user/comments" element={<CommentsLayout />}>
              <Route index={true} element={<Comments />} />
              <Route
                path="/user/comments/addcomment"
                element={<AddComment />}
              />
            </Route>
            <Route path="/user/vehicles" element={<Vehicles />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
