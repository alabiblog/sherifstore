import Image from "next/image"
import { LiaChessKnightSolid } from "react-icons/lia";
import { FcSmartphoneTablet } from "react-icons/fc";
import { MdOutlineResetTv } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";


export default function Service(){
    return(
        <main className="min-h-screen">
            <div className="relative">
         <Image
         height={100}
         width={1000}
         src={"/serr.jpg"}
         alt="serr"
         className="w-100 h-50 opacity-40 lg:w-350 lg:h-80"/>
         <p className="text-2xl text-green-300 font-extrabold absolute top-20 right-40">Service</p>
         </div>
         <div className="flex justify-center mt-15">
            <LiaChessKnightSolid className="text-8xl text-black"/>
         </div>
         <p className="text-2xl text-center mt-5 text-blue-400 ">Popular Package</p>
         <p className="text-3xl text-center mt-5 text-black font-extrabold ">Our Business Service</p>
        <div className="h-80 w-85 mx-10 shadow mt-5">
            <div className="flex justify-center mt-5">
            <FcSmartphoneTablet className="text-7xl "/>
           </div>
            <p className="text-2xl font-bold text-center mt-10">Startups</p>
            <p className="text-sm text-gray-500 font-bold text-center mt-3">We've funded hundreds of <br/> companies over the world, <br/> you'll find them all here.</p>
        </div>
        <div className=" h-80 w-85 mx-10 shadow mt-5">
            <div className="flex justify-center mt-5">
            <MdOutlineResetTv  className="text-7xl "/>
           </div>
            <p className="text-2xl font-bold text-center mt-10">Business Growing</p>
            <p className="text-sm text-gray-500 font-bold text-center mt-5">Based on client needs,<br/>  We will provide some<br/>  good business solutions</p>
        </div>
        <div className="h-80 w-85 mx-10 shadow mt-5">
            <div className="flex justify-center mt-5">
            <GiBrain  className="text-7xl "/>
           </div>
            <p className="text-2xl font-bold text-center mt-10">Social Media Marketing</p>
            <p className="text-sm text-gray-500 font-bold text-center mt-3">Social marketing is an approach <br/>used to develop activities aimed.</p>
        </div>
        <div className="h-80 w-85 mx-10 shadow mt-5">
            <div className="flex justify-center mt-5">
        <FaRegThumbsUp  className="text-7xl "/>
           </div>
            <p className="text-2xl font-bold text-center mt-10">Development</p>
            <p className="text-sm text-gray-500 font-bold text-center mt-3">Creating Your Own Website <br/> was Never That Easy.<br/> Come and Check it Out!</p>
        </div>
        <form onSubmit={handleSubmit}>
                  <p className="text-2xl font-bold text-black text-center mt-10">Contact Us</p>
                  <div className="mt-15 mx-2">
                    <TextField
                      fullWidth
                      color="primary"
                      focused
                      type="text"
                      id="fullName"
                      placeholder="Enter Full Name"
                      label="Full Name"/>
                  </div>
        
                  <div className="mt-10 mx-2">
                    <TextField
                      fullWidth
                      color="primary"
                      focused
                      type="text"
                      id="email"
                      placeholder="sherifstore@gmail.com"
                      label="Email"
                      />
                  </div>
        
                  <div className="mt-10 mx-2">
                    <TextField
                      fullWidth
                      color="primary"
                      focused
                      type="text"
                      rows={5}
                      multiline
                      id="note"
                      placeholder="Note"
                      label="Note"/>
                      
                  </div>
                   
                  <button type="submit" className="text-blue-600 font-extrabold text-lg border bg-gradient-to-br from-green-500 to-green-100 rounded-xl to-green-800 w-90 mt-4 mx-5 ">Submit</button>
                </form>
        
        </main>
    )
}