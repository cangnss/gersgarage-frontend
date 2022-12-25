import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/signup" element={<Signup />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;