"use client"

import { FaHouseChimney } from "react-icons/fa6";
import { FaLaptopHouse } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { HiOutlineCube } from "react-icons/hi2";
import Link from "next/link";

export default function Footer(){
    const year = new Date().getFullYear()
    return(
        <main className="fixed bottom-0  w-full  bg-gradient-to-br from-green-300  to-green-900 lg:h-20 lg:bg-gradient-to-br from-green-300 ">
            <div className="  relative flex justify-between mx-2 p-4 lg:hidden">
            <div className="flex space-x-15 mt-1">
            <Link href={"/"}><div>
                <FaHouseChimney className="text-3xl text-white ml-2"/>
                <p className="text-sm text-white ml-1">Home</p>
            </div></Link>
           <Link href={"/components/service"}><div>
                <FaLaptopHouse className="text-3xl text-white ml-2"/>
                <p className="text-sm text-white">Services</p>
            </div></Link> 
            </div>
            <div className="flex space-x-10 mt-1">
            <Link href={"/components/listing"}><div>
                <GiHumanTarget className="text-3xl text-white ml-2"/>
                <p className="text-sm text-white ml-2">Listing</p>
            </div></Link>
            <Link href={"/components/contact"}><div>
                <MdContactMail className="text-3xl text-white ml-2"/>
                <p className="text-sm text-white">Contact</p>
            </div></Link>
            </div>
            </div>
            <div className="absolute top-0 left-48 h-12 w-12 rounded-full  bg-white flex justify-center items-center lg:hidden">
            <HiOutlineCube className="text-1xl text-blue-400 "/>
            </div>
            <div className="hidden lg:block lg:flex lg:justify-between lg:p-5">
            <div className="hidden lg:block">
              <p className="text-sm text-white font-bold">© {year} by SHERIF<span className="text-orange-500">STORE</span> Theme, Powered By Worldpress</p>
            </div>
            <div className="flex gap-5">
                <p className="text-sm text-white font-bold">PRIVACY POLICY</p>
                <p className="text-sm text-white font-bold">ABOUT</p>
                <p className="text-sm text-white font-bold">CONTACT US</p>
            </div>
            </div>
        </main>
    )
}