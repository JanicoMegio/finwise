import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "../src/assets/styles/fonts.css"


function App() {
  
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   </Router>
  );
}

export default App;
