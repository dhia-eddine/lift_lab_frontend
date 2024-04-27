import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './app/pages/login/LoginPage';
import Navbar from './app/pages/nav/Navbar';
import Home from './app/pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes> {/* Wrap your routes with <Routes> */}
        <Route path="/login" element={<LoginPage />} /> {/* Use the "element" prop instead of "Component" */}
        <Route path="/" element={<Navbar />} /> {/* Use the "element" prop instead of "Component" */}
        <Route path="/home" element={<Home />} /> {/* Use the "element" prop instead of "Component" */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
