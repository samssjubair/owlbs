import React from "react";
import logo from '../../assets/brand_logo_white.png'
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const FooterLinkSection = () => {
  return (
    <footer className="bg-black  text-white py-8  ">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="w-3/4 pe-4 sm:mb-0 col-span-2 sm:col-span-1 flex flex-col">
          <Image src={logo} alt="OwlBS Logo" height={70} width={150} />
          <div>
            <p className="text-sm">
              Owl Business Solutions provides services like website development,
              mobile application development, software development, digital
              marketing, and much more.
            </p>
          </div>
        </div>

        <div className="mb-4 sm:mb-0 col-span-2 sm:col-span-1 flex flex-col">
          <ul>
            <li className=" text-xl border-b-primary  ">QUICK LINK</li>
            <hr className="border-t-primary w-24 my-4" />
            <li className="mb-2">
              <Link href="/about">Services</Link>
            </li>
            <li className="mb-2">
              <Link href="/about">Our Works</Link>
            </li>
            <li className="mb-2">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0 col-span-2 sm:col-span-1 flex flex-col">
          <ul>
            <li className=" text-xl border-b-primary  ">GET IN TOUCH</li>
            <hr className="border-t-primary w-24 my-4" />
            <li className="mb-2">
              <Link href="/about">
                <FaLocationDot className="inline" /> Uttara Sector: 3, Dhaka,
                Bangladesh
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about">
                <IoCall className="inline" /> +880 1624874209
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about">
                <IoMdMail className="inline" /> ceo@owlbs.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-4 sm:mb-0 col-span-2 sm:col-span-1 flex flex-col">
          <ul>
            <li className=" text-xl border-b-primary  ">Contact Us</li>
            <hr className="border-t-primary w-24 my-4" />
            <button className="w-full border-primary border text-primary hover:bg-primary hover:text-black px-4 py-2 rounded-md mb-3">
              CALL NOW
            </button>
            <button className="w-full bg-primary text-black px-4 py-2 rounded-md hover:bg-black hover:border-primary hover:border hover:text-primary   ">
              Contact Via Whatsapp
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinkSection;
