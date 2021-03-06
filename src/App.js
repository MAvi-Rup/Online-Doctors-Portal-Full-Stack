import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Header/Navbar';
import About from './Pages/About/About';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="login" element={<Login></Login>} />
      </Routes>
      
    </div>
  );
}

export default App;
