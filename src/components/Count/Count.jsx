import weddingcouple from "../../assets/image/couple.png";
import map from "../../assets/image/map.png";
import weddingarch from "../../assets/image/wedding-arch.png";
import wedding from "../../assets/image/wedding-couple.png";
const Count = () => {
    return (
     <section id="service" className="p-12 flex flex-col space-y-12 md:flex-row md:justify-between  
        font-Jost h-full md:p-12  md:space-x-48 md:space-y-0
        md:items-center">
          <div className="flex flex-row justify-center space-x-32 md:w-1/2 md:justify-center md:space-x-32">
            <div className="flex flex-col items-center">
             <div className="w-20 h-20">
                 <img src={weddingcouple} className="w-full h-full rounded-lg shadow-lg" alt="wedding couple" />
             </div>
             <div className="font-Sail text-6xl md:text-8xl text-green ">3,240+</div>
             <div className="text-green text-md md:text-xl ">Happy Couples</div>
           </div>
           <div className="flex flex-col items-center">
             <div className="w-20 h-20">
                 <img src={map} className="w-full h-full rounded-lg shadow-lg" alt="location" />
             </div>
             <div className="font-Sail text-6xl md:text-8xl text-green ">230+</div>
             <div className="text-green text-md md:text-xl ">Location</div>
          </div>
          </div>
          
          {/* <div className="flex flex-col items-center hidden md:block">
             <div className="w-20 h-20">
                 <img src={map} className="w-full h-full rounded-lg shadow-lg" alt="location" />
             </div>
             <div className="font-Sail text-8xl text-green ">230+</div>
             <div className="text-green text-xl ">Location</div>
          </div> */}

          <div className="flex flex-row justify-center space-x-32 md:w-1/2 md:justify-start md:space-x-32">
            <div className="flex flex-col items-center">
             <div className="w-20 h-20">
                 <img src={wedding} className="w-full h-full rounded-lg shadow-lg" alt="wedding" />
             </div>
             <div className="font-Sail text-6xl md:text-8xl text-green ">3,325+</div>
             <div className="text-green text-md md:text-xl ">Wedding</div>
          </div>
          <div className="flex flex-col items-center">
             <div className="w-20 h-20">
                 <img src={weddingarch} className="w-full h-full rounded-lg shadow-lg" alt="wedding arch" />
             </div>
             <div className="font-Sail text-6xl md:text-8xl text-green ">526+</div>
             <div className="text-green text-md md:text-xl ">Decoration</div>
          </div>
          </div>
          
          
     </section>
    );
}

export default Count