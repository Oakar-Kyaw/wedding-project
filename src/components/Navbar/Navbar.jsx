import { useRef } from "react";
import weddingGirl from "../../assets/image/wedding-girl.png";
import { useLocation } from "react-router-dom";

function NavBar() {

  const closeRef = useRef();
  const location = useLocation();
  const pathname = location.pathname;

  const handleClose = ()=>{
     closeRef.current.classList.toggle("hidden")
  }

  return (
    < nav id="#home" className="relative h-full flex flex-col text-xl font-Jost md:p-12 bg-[url('./assets/image/header-white.jpg')] bg-center bg-cover">
        <div className="flex justify-between bg-white p-1 md:p-6">
           <div className="flex justify-center items-center m-6 md:m-0 md:flex md:items-start">
            <a href="#home">
                <div className="font-Sail text-4xl">Logo</div>
              </a> 
           </div>
              
          <div className="hidden absolute  md:animate-none duration-1500 z-50 bg-green text-white text-center text-sm h-96 flex-col justify-center items-center space-y-4 w-full 
                          md:mt-2 md:h-0 md:text-black md:z-0 md:text-xl md:flex md:flex-row md:space-x-4 uppercase" ref={closeRef} >

              <div className="w-full flex justify-end md:hidden" onClick={handleClose}>
                 <i className="fa-solid fa-square-xmark  text-3xl m-6 hover:cursor-pointer"></i>
              </div>
              
              <a href="#home" className="group">
                <div className="pb-2 md:p-0  relative">Home</div>
                <div className="group-hover:block hidden absolute w-14 h-2 top-12 bg-green"></div>
              </a> 
              <a href="#aboutus" className="group"> 
                <div className="border border-y-3 border-x-0 border-white p-2 md:p-0 md:border-0 relative">About</div>
                <div className="group-hover:block hidden absolute w-14 h-2 top-12 bg-green"></div>
              </a>
              <a href="#home" className="group">
                <div className="border-b-3 p-2 md:p-0 md:border-0 relative">Sale</div>
                <div className="group-hover:block hidden absolute w-12 h-2 top-12 bg-green"></div>
              </a>
              <a href="#service" className="group">
                <div className="relative border border-y-3 border-x-0 border-white p-2 md:p-0 md:border-0">Service</div>
                <div className="group-hover:block hidden absolute w-20 h-2 top-12 bg-green"></div>
              </a>
              <a href="#contactus" className="group">
                <div className="p-2 md:p-0 relative">Contact Us</div>
                <div className="group-hover:block hidden absolute w-28 h-2 top-12 bg-green"></div>
              </a>
              <a href="">
                <div className="border border-y-3 border-x-0 border-white p-2 md:p-0 md:border-0 md:hidden">Booking</div>
              </a>
              <a href="">
                <div className="p-2 md:p-0 md:hidden">Sign In</div>
              </a>
          </div>
          <div className=" md:flex md:space-x-4 uppercase ">
               <div className="md:hidden block" onClick = {handleClose}>
                  <i className="fa-solid fa-bars text-3xl shadow-sm rounded-md m-6 md:hidden hover:cursor-pointer p-1 px-3 bg-green text-white"></i>
               </div>
              <a href="/booking">
                <div className="hidden md:block">Booking</div> 
              </a>
              <a href="/signin">
                 <div className="hidden md:block">Sign In</div>
              </a>
          </div> 
          </div>
          {
          pathname !="/booking" ?
          <div className="h-full w-full flex flex-col items-center text-center md:text-start md:flex-row md:justify-between md:items-center">
            <div className="flex justify-center items-center w-9/12">
              <div className=" flex flex-col mt-12 space-y-4 text-center md:text-start md:mt-0">
                 <div className="font-Sail text-4xl md:text-6xl">White Ball Dress</div>
                 <div className="text-green text-3xl md:text-4xl">$80.0</div>
                 <p className="w-full leading-loose font-light md:w-11/12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                 <div className="flex justify-center md:justify-start ">
                  <button className="py-2 px-6 text-xl  text-white bg-green md:py-4 md:px-8 md:text-2xl">Shop Now</button>
                </div>
            </div>
            </div>
            <div className="w-11/12 flex justify-center ">
              <img src={weddingGirl} alt="" className="mb-6  h-full" />
            </div>
              
            
          </div>
          :
          ""
        }
      
  </nav>
  );
}



export default NavBar