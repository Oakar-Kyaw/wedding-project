import niki from "../../assets/image/niki.jpg";

const Review = () => {
   return (
    <section id="review" className="p-6 flex flex-col items-center space-y-6 
    font-Jost h-full md:p-12 md:space-y-4
    md:items-start">
        <div className="flex flex-col  w-full md:p-14">
             <div className="flex flex-col w-full border border-black p-8">
                 <div className="flex flex-col space-y-4 items-center w-full border p-6">
                     <div className="text-pink text-lg md:text-xl">Reviews</div>
                     <div className="text-2xl text-center md:text-5xl font-Sail pb-3 md:pb-6">What Our Client Says</div>
                     <div className="border w-full"></div>
                     <div className="leading-loose tracking-wide text-center md:leading-loose md:tracking-wider md:text-xl text-gray-700 p-2 md:p-6">
                        <p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
                             Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </p>
                     </div>
                     <div className="p-2 border border-green rounded-[50%] p-6">
                         <img src={niki} alt="reviewer" className="w-20 h-20 rounded-[50%]" />
                     </div>
                     <div className="text-xl md:text-2xl font-Sail text-center text-green p-2">
                         Marlin & William Som
                     </div>
                     <div className="text-gray-700 text-xl">
                         Wedding - 20.3.2023
                     </div>
                 </div>
             </div>
        </div>
   </section>
   );
}

export default Review