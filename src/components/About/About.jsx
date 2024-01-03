import weddingCouple from "../../assets/image/wedding-couple.jpg";
import weddingCouple1 from "../../assets/image/wedding-couple1.jpg";

const About = () => {
    return (
        <section id="aboutus" className="p-6 flex flex-col items-center space-y-2 font-Jost h-full md:p-10 ">
            <div className="text-pink ">
                 <div className="text-3xl">Who we are</div>
            </div>
            <div className="font-Sail  py-6 md:py-2">
                  <div className="text-3xl md:text-4xl">About Us</div>
            </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:ml-10 md:flex-row md:justify-center md:items-start md:space-x-12 ">
            <div className="text-xl  md:w-full ">
              <p className="leading-loose tracking-wide text-center md:ml-20 md:pr-6 md:mt-4 md:text-start">
               <span className="font-Sail text-6xl text-pink m-0">C</span> ontrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32
               </p>
            </div>
            <div className="md:ml-10 md:h-4/6 group relative">
                <img src={weddingCouple1} alt="" className="group-hover:cursor-pointer md:w-3/4 md:h-full shadow-lg rounded-md" />
                <div className="hidden w-full group-hover:block group-hover:cursor-pointer md:w-3/4 md:h-full 
                    absolute bottom-0 left-0 bg-gray-900
                    bg-opacity-40 z-50 md:top-0 md:left-0 rounded-md"> 
                    <div className="p-2 text-center md:mt-56 text-pink"> "Neque porro quisquam est qui dolorem ipsum quia dolor 
                         sit amet, consectetur, adipisci velit..." </div>
                </div>

            </div>
          </div>
        </section>
        // <main id="aboutus" className="w-full flex flex-col items-center space-y-4 font-Jost h-full md:p-10 md:space-y-6">
        //     <section className="font-Sail text-4xl md:text-6xl py-6 md:py-4">
        //          <div>About Us</div>
        //     </section>

        //     {/* <section className="w-full flex flex-col space-y-4 items-center md:w-full md:flex-row md:justify-center md:items-start md:space-x-32">
        //          <div className="md:h-72 md:w-2/6 flex justify-center relative">
        //              <img src={weddingCouple} alt="" className=" md:h-full md:w-5/6 p-6" />
        //              <div className="hidden md:block h-3/7 w-9/12 p-6 bg-abovewhite
        //                               bg-opacity-80 shadow-lg rounded-lg 
        //                               top-48 left-40 absolute z-50 text-sm md:text-md">
        //                   "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        //                     "There is no one who loves pain itself, 
        //                     who seeks after it and wants to have it, simply because it is pain..."
        //             </div>
        //          </div>
        //          <div className="md:h-72 md:w-2/6 flex justify-center relative">
        //              <img src={weddingCouple1} alt="" className=" md:h-full md:w-5/6 p-6" />
        //              <div className="hidden md:block h-3/7 w-9/12 p-6 bg-abovewhite 
        //              bg-opacity-80 shadow-lg rounded-lg bottom-48 left-40 
        //              absolute z-50 text-sm md:text-md">
        //                 "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        //                     "There is no one who loves pain itself, 
        //                     who seeks after it and wants to have it, simply because it is pain..."
        //             </div>
        //          </div>
        //     </section>
        //     <section className="mt-6 md:pt-16">
        //       <p className="leading-loose tracking-wide text-center text-md m-6 md:m-0 md:text-xl ">
        //           Contrary to popular belief, Lorem Ipsum is not simply random text. 
        //           It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        //            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
        //             comes from a line in section 1.10.32
        //       </p>  
        //     </section>
        //      */}
        // </main>
    );
}

export default About