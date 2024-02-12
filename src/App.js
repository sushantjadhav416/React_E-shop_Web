import logo from './logo.svg';
import './App.css';
import './CSS/style.css'



import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import Banner_main from './Mycomponents/Banner_main.js';
import Register from './Mycomponents/Register.js';
import Login from './Mycomponents/Login.js';

import Fashion_page from './Pages/Fashion_page.js';
import Electronics_page from './Pages/Electronics_page.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_top from './Mycomponents/Header_top.js';
import Logo from './Mycomponents/Logo.js';
import Header_bottom from "./Mycomponents/Header_bottom.js";
import Footer from "./Mycomponents/Footer.js";

import Glocery_page from './Pages/Glocery_page.js';

function App() 
{
  return (
    <>
     <Router>
        
        <Routes>
            <Route path="/" element={<Banner_main/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Electronics" element={<Electronics_page/>}/>
            <Route path="/Fashion" element={<Fashion_page/>}/>
            <Route path="/Grocery" element={<Glocery_page/>}/>
        </Routes>
       
     </Router>
    </>
  );
}

export default App;
