import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;