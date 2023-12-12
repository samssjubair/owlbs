"use client"
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 px-8 flex items-center justify-between">
      {/* Left side - Owl Bs branding */}
      <div className="text-black">
        <p>© Owl Business Solutions, 2023 | All Rights Reserved</p>
      </div>

      {/* Right side - Social Media Icons */}
      <IconContext.Provider value={{ className: "text-black", size: "1.2em" }}>
        <div className="flex items-center space-x-4">
          <Link href="/">
            
              <FaFacebook />
            
          </Link>
          <Link href="/">
            
              <FaTwitter />
            
          </Link>
          <Link href="/">
            
              <FaWhatsapp />
            
          </Link>
          <Link href="/">
            
              <FaLinkedin />
            
          </Link>
          <Link href="/">
            
              <FaInstagram />
            
          </Link>
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
