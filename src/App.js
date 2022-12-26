import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Contact from './components/Contact/Contact';
import Footer from './layouts/Footer/Footer';
import Admin from './components/Admin/Admin';
import AdminLayout from './components/Admin/AdminLayout';
import AddEmployee from './components/Admin/Employee/AddEmployee';
import EmployeeLayout from './components/Admin/Employee/EmployeeLayout';
import Employee from './components/Admin/Employee/Employee';
import UpdateEmployee from './components/Admin/Employee/UpdateEmployee';
import ServicesLayout from './components/Admin/Services/ServicesLayout';
import Services from './components/Admin/Services/Services';
import AddService from './components/Admin/Services/AddService';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/signup" element={<Signup />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index={true} element={<Admin />} />
          <Route path="/admin/employee" element={<EmployeeLayout />}>
            <Route index={true} element={<Employee />} />
            <Route path="/admin/employee/adddemployee" element={<AddEmployee />} />
            <Route path="/admin/employee/:id" element={<UpdateEmployee />} />
          </Route> 
          <Route path="/admin/services" element={<ServicesLayout />}>
            <Route index={true} element={<Services />} />
            <Route path='/admin/services/addservices' element={<AddService />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;