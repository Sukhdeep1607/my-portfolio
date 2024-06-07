import React from 'react'
import Mylogo from "../assets/Mylogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 items-center flex justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className='mx-2 w-20 h-20 ' src={Mylogo} alt="mylogo" />
    </div>
    <div className="m-8 justify-center items-center flex gap-4 text-2xl">
      <FaLinkedin />
      <FaInstagram />
      <FaGithub />
    </div>
  </nav>
  )
}

export default Navbar