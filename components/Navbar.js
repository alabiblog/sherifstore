"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePhoneIphone } from "react-icons/md";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  // Animated menu links data
  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/components/service", label: "Services" },
    { href: "/components/listing", label: "Listing" },
    { href: "/components/about", label: "About" },
    { href: "/components/contact", label: "Contacts" },
  ];

  return (
    <main className="w-full bg-white/90 relative overflow-hidden">
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
          <Link href={"/components/contact"}><div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-400 to-green-800 flex justify-center items-center">
            <MdOutlinePhoneIphone className="text-3xl text-white" />
          </div></Link>
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-green-300 to-green-900 flex justify-center items-center">
            <button onClick={() => setVisible(!visible)}>
              <GiHamburgerMenu className="text-3xl text-white font-extrabold" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full z-50 bg-gradient-to-br from-green-300 to-green-900 transform transition-all duration-700 ease-in-out ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <button className="text-3xl text-white mt-5 ml-5" onClick={() => setVisible(false)}>✕</button>
        <div className="p-10 flex flex-col gap-2">
          {menuLinks.map((link, idx) => (
            <Link href={link.href} key={link.label}>
              <p
                onClick={() => setVisible(false)}
                className={`font-bold p-2 text-white transition-all duration-700
                  ${visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"}
                  `}
                style={{
                  transitionDelay: visible ? `${idx * 120 + 200}ms` : "0ms"
                }}
              >
                {link.label}
              </p>
            </Link>
          ))}
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
        <div className="rounded-xl w-50 bg-gradient-to-br from-green-900 to-green-500">
          <p className="text-center p-5 text-white font-extrabold">Free Consolation</p>
        </div>
      </div>
    </main>
  );
}


















