import { useState } from 'react'
import NavBar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Booking from './components/Booking/Booking';
import ContentLayout from './ContentLayout';

function RouteFile() {
   return (
   <BrowserRouter>
      <div className="bg-white" >
         <NavBar />
         <Routes> 

            {/* content layer */}
            <Route path="/" element={<ContentLayout />} />

            {/* booking router */}
            <Route path="/booking" element={<Booking/>}/>

         </Routes> 
         <Footer />
       </div>
   </BrowserRouter>
   );
     
}

export default RouteFile