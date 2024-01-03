
const ContactUs = () => {
   return (
    <section id="contactus" className="p-6 flex flex-col items-center space-y-4
    font-Jost h-full md:p-10 md:space-y-4
    md:items-start">
      <div className="w-full text-center text-pink text-xl">Contact Us</div>
      <div className="w-full text-center font-Sail text-4xl py-4">How You Can Contact Us</div>
      <div className="flex flex-col w-full items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex flex-col h-80 w-80 justify-center space-y-4 items-center p-8 shadow-lg">
              
              <div className="text-pink rounded-[50%] bg-iconwhite w-20 p-2 h-20 flex justify-center items-center">
                <i class="fa-solid fa-location-dot text-4xl "></i>
              </div>
              <div className="text-2xl">
                 Address
              </div>
              <div className="text-center text-xl tracking-wide leading-loose text-gray-700">
                <p>7 Green Lake Street Crawfordsville, IN 47933</p>
              </div>
          </div>
          <div className="flex flex-col  h-80 w-80 justify-center space-y-4 items-center p-8 shadow-lg">
              <div className="text-pink rounded-[50%] bg-iconwhite w-20 p-2 h-20 flex justify-center items-center">
                  <i class="fa-solid fa-envelope text-pink text-4xl"></i>
              </div>
              <div className="text-2xl">
                 Email Us
              </div>
              <div className="text-center text-xl tracking-wide leading-loose text-gray-700">
                <p>kwin@gmail.com</p>
                <p>oakarkyaw7090@gmail.com</p>
              </div>
          </div>
          <div className="flex flex-col h-80 w-80 justify-center space-y-4 items-center p-8 shadow-lg ">
              <div className="text-pink rounded-[50%] bg-iconwhite w-20 p-2 h-20 flex justify-center items-center">
                   <i class="fa-solid fa-phone text-pink text-4xl"></i>
              </div>
              <div className="text-2xl">
                 Call Now
              </div>
              <div className="text-center text-xl tracking-wide leading-loose text-gray-700">
                <p>+95 977324324</p>
                <p>+95 923546353</p>
              </div>
          </div>
      </div>
      <div className="flex flex-col space-y-4 w-full items-center py-12">
           <div className="text-4xl font-Sail">Have Any Question</div>
           <p className="text-center text-xl p-2 leading-loose tracking-wide w-96 text-gray-500">It is a long established fact that a reader will be distracted content of a page when looking.</p>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col justify-center items-center  p-12 shadow-lg space-y-4">
         <div className="flex flex-col space-y-6">
             <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 w-full">
                 <input 
                   type="text"
                   placeholder = "Your Name"
                   className="p-4 border px-6" />
                 <input 
                   type="email"
                   placeholder = "Your Email"
                   className="p-4 border px-6" />
             </div>
             <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 w-full">
                 <input 
                   type="text"
                   placeholder = "Address"
                   className="p-4 border px-6 w-full" />
             </div>
             <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 w-full">
                 <textarea 
                   rows="5"
                   cols="20"
                   placeholder = "Message"
                   className="p-4 border px-6 w-full" />
             </div>
         </div>
         <div className="p-4 bg-green text-white">
            <button>GET IN TOUCH</button>
         </div>
      </div>
      </div>
      
   </section>
   );
}

export default ContactUs