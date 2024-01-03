import weddingdress from "../../assets/image/wedding-dress.webp";
import weddingaccessories from "../../assets/image/wedding-accessories.jpg";
import weddingphotoshooting from "../../assets/image/wedding-photoshooting.jpg";
import weddingtheme from "../../assets/image/wedding-theme.webp";

const Service = () => {
    return (
        <section id="service" className="p-6 flex flex-col items-center space-y-2 
              font-Jost h-full md:p-10 md:space-y-4
              md:items-start">
            <div className="text-pink ">
                 <div className="text-3xl">Our Service</div>
            </div>
            <div className="font-Sail ">
                  <div className="font-Sail text-3xl md:text-4xl">What We Offer For You</div>
            </div>
            <div className="w-full pt-4 flex flex-col items-center space-y-8 md:flex-row space-y-4 md:justify-between md:space-y-0">
                <div className="flex flex-col shadow-lg rounded-lg hover:-translate-y-3 duration-500 cursor-pointer">
                    <div className="w-80 h-72">
                        <img src={weddingdress} alt="wedding dress" className="w-full h-full rounded-t-xl" />
                    </div>
                    <div className="text-center p-8 text-xl border border-gray-400 rounded-b-xl">Wedding Dress</div>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg hover:-translate-y-3 duration-500 cursor-pointer">
                    <div className="w-80 h-72">
                        <img src={weddingaccessories} alt="wedding dress" className="w-full h-full rounded-t-xl" />
                    </div>
                    <div className="text-center p-8 text-xl border border-gray-400 rounded-b-xl">Wedding Accessories</div>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg hover:-translate-y-3 duration-500 cursor-pointer">
                    <div className="w-80 h-72">
                        <img src={weddingphotoshooting} alt="wedding dress" className="w-full h-full rounded-t-xl" />
                    </div>
                    <div className="text-center p-8 text-xl border border-gray-400 rounded-b-xl">Wedding Photoshooting</div>
                </div>
                <div className="flex flex-col shadow-lg rounded-lg hover:-translate-y-3 duration-500 cursor-pointer">
                    <div className="w-80 h-72">
                        <img src={weddingtheme} alt="wedding dress" className="w-full h-full rounded-t-xl" />
                    </div>
                    <div className="text-center p-8 text-xl border border-gray-400 rounded-b-xl">Wedding Theme</div>
                </div>
            </div>
        </section>
    );
}

export default Service