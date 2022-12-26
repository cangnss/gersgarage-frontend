import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Contact from './components/Contact/Contact';
import Footer from './layouts/Footer/Footer';
import Admin from './components/Admin/Admin';
import AdminLayout from './components/Admin/AdminLayout';
import AddEmployee from './components/Admin/AddEmployee';

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
          <Route path="/admin/addemployee" element={<AddEmployee />} /> 
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;