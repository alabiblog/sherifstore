"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <main className="w-full  bg-white/90 relative overflow-hidden ">
      <div className="flex justify-between p-5">
        <div className="flex lg:hidden">
          <Image
            height={30}
            width={30}
            src={"/nlogo.png"}
            alt="logo"
            className="h-15 w-15"
          />
          <p className="text-xl text-orange-300 font-extrabold ml-2">
            SHERIF<span className="text-blue-300">STORE</span>
          </p>
        </div>

        <div className="flex space-x-2 lg:hidden">
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-400 to-green-800 flex justify-center items-center">
            <MdOutlinePhoneIphone className="text-3xl text-white" />
          </div>
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-300 to-green-900 flex justify-center items-center">
            <button onClick={() => setVisible(!visible)}><GiHamburgerMenu className="text-3xl text-white font-extrabold" /></button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full z-50 bg-gradient-to-br from-green-300 to-green-900 transform transition-all duration-2000 ease-in-out ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <button className="text-3xl text-white mt-5 ml-5"onClick={() => setVisible(false)}>✕</button>
        <div 
        
      className="p-10">
          <Link href={"/"}><p onClick={() => setVisible(false)} className="font-bold p-2 text-white">Home</p></Link>
          <Link href={"/components/service"}><p onClick={() => setVisible(false)} className="font-bold p-2 text-white">Services</p></Link>
          <Link href={"/components/listing"}><p onClick={() => setVisible(false)} className="font-bold p-2 text-white">Listing</p></Link>
          <Link href={"/components/about"}><p onClick={() => setVisible(false)} className="font-bold p-2 text-white">About</p></Link>
          <Link href={"/components/contact"}><p onClick={() => setVisible(false)} className="font-bold p-2 text-white">Contacts</p></Link>
        </div>
      </div>
      <div className="hidden lg:block lg:flex lg:justify-between lg:p-5">
      <div className="flex">
          <Image
            height={30}
            width={30}
            src={"/nlogo.png"}
            alt="logo"
            className="h-15 w-15"
          />
          <p className="text-xl text-orange-300 font-extrabold ml-2">
            SHERIF<span className="text-blue-300">STORE</span>
          </p>
        </div>
        <div className="hidden lg:block lg:flex lg:gap-4">
          <Link href={"/"}><p className="text-black font-bold text-sm mt-5 hover:text-green-700">HOME</p></Link>
          <Link href={"/components/about"}><p className="text-black font-bold text-sm mt-5">ABOUT</p></Link>
          <Link href={"/components/service"}><p className="text-black font-bold text-sm mt-5 hover:text-green-700">SERVICE</p></Link>
          <Link href={"/components/listing"}><p className="text-black font-bold text-sm mt-5 hover:text-green-700">LISTING</p></Link>
          <Link href={"/components/contact"}><p className="text-black font-bold text-sm mt-5 hover:text-green-700">CONTACT</p></Link>
        </div>
        <div className=" rounded-xl w-50 bg-gradient-to-br from-green-900 to-green-500">
          <p className="text-center p-5 text-white font-extrabold">Free Consolation</p>
        </div>
        </div>
    </main>
  );
}









































//  "use client"


 
//  import Image from "next/image"
//  import Link from "next/link";
//  import { useState } from "react";
//  import { GiHamburgerMenu } from "react-icons/gi";
//  import { MdOutlinePhoneIphone } from "react-icons/md";



//  export default function Navbar(){
//      const[open,setOpen]=useState(false)
//      const[visible,setVisible]= useState(false)
   
//      return(
//          <main className="w-full max-w-3xl bg-white/90">
//              <div className="flex justify-between p-5">
//              <div className="flex">
//              <div>
//                 <Image
//                 height={30}
//                 width={30}
//                 src={"/nlogo.png"}
//                 alt="logo"
//                 className="h-15 w-15"/> 
//              </div>
//              <div>
//                  <p className="text-xl text-orange-300 font-extrabold">SHERIF<span className="text-blue-300">STORE</span></p>
//              </div>
//            </div>
//              <div className="flex space-x-2">
//              <div className="h-11 w-11  rounded-full bg-gradient-to-br from-green-400  to-green-800 flex justify-center items-center">
//                  <MdOutlinePhoneIphone className="text-3xl text-white"/>
//             </div>
//              <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-300  to-green-900 flex justify-center items-center">
//               <button onClick={()=>setVisible(!visible)}>{visible? ""  : <GiHamburgerMenu className="text-3xl text-white font-extrabold"/>}</button>
//              </div>
//              </div>
//              </div>
//              {visible && <div
//              className={`fixed ease-in-out top-0 right-0 h-full w-full z-50 bg-gradient-to-br from-green-300  to-green-900 duration-3000  ${visible? "translate-x-0" : "translate-x-full"}`}>
//              <button className="text-3xl text-white mt-5 ml-5" onClick={()=>setVisible(false)}>✕</button>
//              <div className="p-10">
//                  <Link href={"/"}><p onClick={()=>setVisible(false)} className="font-bold p-2 text-white">Home</p></Link>
//                  <p  className="font-bold p-2 text-white">About</p>
//                  <p className="font-bold p-2 text-white">Services</p>
//                  <p className="font-bold p-2 text-white">Blog</p>
//                  <p className="font-bold p-2 text-white">Pages</p>
//                  <p className="font-bold p-2 text-white">Contacts</p>
//              </div>
            
            
            
//              </div>}
//         </main>
//      )
//  }






























 // "use client"

// import React, { useState } from "react";

// export default function Hamburger() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       {/* Hamburger button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="relative w-8 h-6 flex flex-col justify-between items-center group"
//       >
//         <span
//           className={`block h-1 w-8 bg-black rounded transition-all duration-1000 ease-in-out
//           ${open ? "rotate-45 translate-y-2" : ""}`}
//         ></span>
//         <span
//           className={`block h-1 w-8 bg-black rounded transition-all duration-1000 ease-in-out
//           ${open ? "opacity-0" : "opacity-100"}`}
//         ></span>
//         <span
//           className={`block h-1 w-8 bg-black rounded transition-all duration-1000 ease-in-out
//           ${open ? "-rotate-45 -translate-y-2" : ""}`}
//         ></span>
//       </button>

//       {/* Menu */}
//       <div
//         className={`mt-8 text-center transition-all duration-3000 ease-in-out transform
//         ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
//       >
//         <p className="text-xl font-semibold">This is your menu ✨</p>
//       </div>
//     </div>
//   );
// }



