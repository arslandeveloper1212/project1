import  Home  from "./components/pages/Home";

import Features from "./components/pages/Features";
import Pricing from "./components/pages/Pricing";
import Login from "./components/pages/Login";

import {Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css'
import { Navbaar } from "./components/Navbaar";
import 'animate.css'
import Footer from "./components/Footer";



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="bg_all_background" >
    <Navbaar/>
    <Routes>
    <Route path= "/" element = {<Home/>}/>
    <Route path="/features" element= {<Features/>} />
    <Route path="pricing" element= {<Pricing/>}/>
    <Route path="login" element= {<Login/>}/>
 
    
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
