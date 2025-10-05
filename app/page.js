"use client"

import Image from "next/image";
import { MdEngineering } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { TfiJoomla } from "react-icons/tfi";
import { PiTelevisionThin } from "react-icons/pi";
import {Swiper,SwiperSlide} from "swiper/react"
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { MdOutlineContactMail } from "react-icons/md";
import { GrCubes } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";


export default function Home() {
  return (
    <main className="min-h-screen  bg-gray-100 ">
      <div className="h-100 w-100  mx-auto relative lg:w-300 ">
        <div className="">
        <Image
        height={600}
        width={600}
        src={"/slider-layer-1.webp"}
        alt="1"
        className="h-60 w-80 absolute right-0 lg:w-250 lg:h-150"/>
        
        </div>
        <div className="p-3 absolute bottom-15 lg:bottom-0 lg:p-2 lg:mt-20">
        <p className="text-sm text-green-300 lg:text-2xl">Welcome to the Team</p>
        <p className="text-2xl font-bold text-black mt-3 lg:text-2xl">We Create<br/> Product <br/>That Makes<br/> Peaople Live<br/> Easiar And Better.</p>
        </div>
        <p className="w-25 absolute bottom-30 right-20 text-green-400 bg-white text-sm text-center rounded-xl lg:bottom-50 lg:right-10">How it work ?</p>
      </div>
      <div className="lg:flex lg:space-x-6 lg:mt-40">
      <div className="h-50 w-90 mx-7 border bg-gradient-to-br from-green-900 to-green-500  text-center lg:mt-40">
        <p className="text-2xl text-white/90 mt-10">Our Service </p>
        <p className="text-2xl font-extrabold text-white/90 mt-5">WE Will Help Your <br/> Business Grow</p>
      </div>
      <div className="h-70 w-90 mx-7 shadow-2xl mt-5 ">
       <div className="flex justify-center mt-3">
        <Image
        height={100}
        width={100}
        src={"/pon.png"}
        alt="pone"
        className="h-20 w-20"/>
       </div>
       <p className="text-2xl font-bold text-center text-black mt-10">Social Media Marketing</p>
       <p className="text-sm font-bold text-center text-gray-600 mt-5">Social marketing  is an approach <br/>  used to develop activities aimed.</p>
      </div>
      <div className="h-70 w-90 mx-7 shadow-2xl mt-5 ">
       <div className="flex justify-center mt-3">
        <Image
        height={100}
        width={100}
        src={"/pho2.png"}
        alt="pone"
        className="h-20 w-20"/>
       </div>
       <p className="text-2xl font-bold text-center text-black mt-10">Business Idea</p>
       <p className="text-sm font-bold text-center text-gray-600 mt-5">Based on client needs,<br/> We will provide some <br/> good business solutions.</p>
      </div>
      <div className="h-70 w-90 mx-7 shadow-2xl mt-5 ">
       <div className="flex justify-center mt-3">
        <Image
        height={100}
        width={100}
        src={"/pon3.png"}
        alt="pone"
        className="h-20 w-20"/>
       </div>
       <p className="text-2xl font-bold text-center text-black mt-10">Development</p>
       <p className="text-sm font-bold text-center text-gray-600 mt-5">Creating Your Own Website <br/> Was Never Easy <br/> Come And Check It Out</p>
      </div>
        </div>
      
      <div className="bg-gradient-to-br from-cyan-100  via-teal-200 to-sky-300">
        <div className="flex justify-center">
        <MdEngineering className="text-8xl text-green-700"/>
        </div>
        <p className="text-sm mt-5 tracking-[1em] text-center text-cyan-400 text-center"> ABOUT OUR COMPANY</p>
       <p className="text-2xl font-extrabold text-black text-center mt-6">We Are Team Of Expart People With Creativity Idea</p>
      <p className="text-2xl text-gray-400 text-center mt-7">As an example, let’s take the<br/> content marketing process, It’s<br/> a process you’ll find in every<br/> Marketing Department out there. </p>
      <div className="p-5 mt-10 lg:absolute lg:right-10 lg:grid lg:grid-cols-2 lg:gap-10">
        <div className="flex space-x-3">
          <div className=" h-17 w-17 rounded-full bg-green-300 flex justify-center items-center">
            <FaPaintBrush  className="text-white text-3xl"/>
          </div>
          <div className="lg:max-w-3xl">
          <p className="text-lg font-bold text-black">Designing</p>
          <p className="text-gray-400 text-lg">Expart In Photoshop</p>
          </div>
        </div>
        <div className="flex space-x-3 mt-5 lg:mt-0">
          <div className=" h-17 w-17 rounded-full bg-green-300 flex justify-center items-center">
            <GrCubes  className="text-white text-3xl"/>
          </div>
          <div>
          <p className="text-lg font-bold text-black">Development</p>
          <p className="text-gray-400 text-lg">Any CMS You Want</p>
          </div>
        </div>
        <div className="flex space-x-3 mt-5">
          <div className=" h-17 w-17 rounded-full bg-green-300 flex justify-center items-center">
            <FaXTwitter  className="text-white text-3xl"/>
          </div>
          <div>
          <p className="text-lg font-bold text-black">Social Media</p>
          <p className="text-gray-400 text-lg">Increasing Your Like</p>
          </div>
        </div>
        <div className="flex space-x-3 mt-5">
          <div className="h-17 w-17 rounded-full bg-green-300 flex justify-center items-center">
            <TfiWorld   className="text-white text-3xl"/>
          </div>
          <div>
          <p className="text-lg font-bold text-black">WorldPress</p>
          <p className="text-gray-400 text-lg">Themes And Plugins</p>
          </div>
        </div>
      </div>
      <div className="p-13">
        <Image
        width={300}
        height={300}
        src={"/myprofile.jpg"}
        alt="2"/>
      </div>
      
      </div>
      <div className="bg-white/90">
      <div className="flex items-center justify-center">
      <TfiJoomla className="text-7xl lg:text-9xl"/>
      </div>
      <p className="tracking-[1em] text-center mt-5">ABOUT OUR COMPANY</p>
      <p className="text-lg font-extrabold text-black text-center mt-5">Our Business Process Road</p>
     <div className="">
      <p className="text-8xl font-extrabold text-center text-green-300">01.</p>
      <p className="text-2xl font-bold text-black text-center mt-5">Create An Idea</p>
      <p className="text-lg text-center text-gray-500 mt-4">What’s hard is to develop <br/> the habits that enable us to<br/> come up with great ideas.</p>
     </div>
     <div className="mt-10">
      <p className="text-8xl font-extrabold text-center text-green-300">02.</p>
      <p className="text-2xl font-bold text-black text-center mt-5">Complete The Project</p>
      <p className="text-lg text-center text-gray-500 mt-4">You can organize yourself and <br/> your team in endless ways.</p>
     </div>
     <div className="mt-10">
      <p className="text-8xl font-extrabold text-center text-green-300">03.</p>
      <p className="text-2xl font-bold text-black text-center mt-5">Execution</p>
      <p className="text-lg text-center text-gray-500 mt-4">When it comes to motivating <br/> teams, awarding members <br/> for good performance.</p>
    <div className="flex items-center justify-center mt-10">
     <Image
     height={300}
     width={300}
     src={"/xax.png"}
     alt="xax"
     className="h-50 w-70 lg:w-150 lg:h-150"/>
     </div>
    </div>
     </div>
     
      <div className="bg-cyan-50 relative h-350">
        <div className="flex items-center justify-center">
       <PiTelevisionThin className="text-center text-8xl mt-15"/>
       </div>
       <p className="text-2xl text-center font-bold">We Are Creative</p>
       <div className="flex items-center justify-center mt-10">
        <Image
        height={30}
        width={30}
        src={"/chat.png"}
        alt="chat"
        className="h-25 w-25 font-bold"/>
       </div>
       <p className="text-2xl  text-center mt-5 text-blue-400">Our Testimonials</p>
       <p className="text-2xl font-bold text-black text-center">Our Happy Customers</p>
       <p className="text-gray-600 mt-10 text-center font-bold">The testimonials feature lets you<br/> collect kudos from customers <br/> and clients and display them on <br/> your site in different ways to add<br/> credibility and a professional feel.</p>
      
    
          <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-70  w-70 mt-10 shadow-2xl lg:h-120 lg:w-120"
      >
        
        <SwiperSlide>
          <div className="flex items-center justify-center h-60 bg-gradient-to-br from-green-900 to-green-500  text-black text-sm font-bold p-5 mt-5">
            "Great Customer Service I Got My First Website From Them I Must Say Thats The Best Decision I Ever Made"
          </div>
         <Image
        height={100}
        width={100}
        src={"/quote.png"}
        alt="quote"
        className="absolute top-0 right-27 h-15 w-15"/>
        </SwiperSlide>
                
        <SwiperSlide>
          <div className="flex items-center justify-center h-60 bg-gradient-to-br from-green-900 to-green-500   text-black text-sm font-bold  p-5 mt-5">
            "Great Customer Service I Have Ever Seen When It Comes About Building Of Website Fast And Reliable I Got My First Website From Them I Must Say Thats The Best Decision I Ever Made"
            
          </div>
           <Image
        height={30}
        width={30}
        src={"/quote.png"}
        alt="quote"
        className="absolute top-0 right-27 h-15 w-15"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-60 bg-gradient-to-br from-green-900 to-green-500   text-black text-sm font-bold  p-5 mt-5">
            🌍 Connect With More Customers
          </div>
           <Image
        height={30}
        width={30}
        src={"/quote.png"}
        alt="quote"
        className="absolute top-0 right-27 h-15 w-15"/>
        </SwiperSlide>
        
      </Swiper>
      <div className="h-65 w-95 rounded-xl bg-white mx-5 shadow-2xl mt-10">
       <p className="text-2xl font-extrabold text-green-500 text-center py-10">Ready?<span className="text-black">Start Your <br/> Own Business</span></p>
      <p className="text-center mt- text-black text-sm">We Are Here To Start Your<br/> New Project And Finish It Soon</p>
      <div className="mt-5 ml-30 w-40 rounded-xl bg-gradient-to-br from-green-300 to-green-600 flex gap-3 items-center justify-center">
        <MdOutlineContactMail className="text-white"/>
        <p className="text-white text-sm">Contact us Today</p>
      </div>
      </div>
      </div>
      
      
    
    </main>
  );
}
