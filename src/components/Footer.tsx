import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import footlogo from "../img/logo.svg";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black rounded-b-3xl lg:rounded-b-[40px] text-white px-3 sm:px-6 lg:px-8 py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 ">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-6  lg:gap-10 text-white/70 translate-y-10 z-10">
          {/*  topA */}
          <div className=" flex flex-1 justify-between gap-2 lg:gap-10 scale-95 md:scale-100">
            {/* Brand */}
            <div className="lg:flex-2 flex-1 flex flex-col justify-center min-w-[100px] shadow-inner shadow-white/40 bg-white/8 p-3 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-2">
                Turning Vision <br />
                Into <br />
                Functional Design.
              </h3>
              <img src={logo} alt="Surdatics Logo" className="mt-4 mb-2 w-25" />
              <p className="text-xs flex items-center gap-1 text-white/40 mt-2 ">
                <FaGoogle size={12} /> devlight61@gmail.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex lg:flex-1 items-center flex-col shadow-inner shadow-white/40 bg-white/8 p-3 rounded-2xl ">
              <h4 className="font-semibold text-white/95 mb-2">Social</h4>
              <div className="flex flex-col gap-4">
                <a href="https://wa.me/qr/RN3GSQ3LS6XRB1" target="blank">
                  <FaWhatsapp size={42} className="w-8 text-white/40 md:w-10" />
                </a>
                <a href="https://www.linkedin.com/in/olamilekan-sunday-849001251" target="blank">
                  <img src={linkedin} alt="LinkedIn" className="w-8 md:w-10" />
                </a>
                <a href="https://www.upwork.com/freelancers/~01739a2b466de3e7fb" target="blank">
                  <FaUpwork size={42} className="w-9 text-white/40 md:w-10" />
                </a>
                <a href="https://x.com/devlightcodes" target="blank">
                  <img src={twitter} alt="Twitter" className="w-8 md:w-10" />
                </a>
              </div>
            </div>
          </div>

          {/* topB */}
          <div className="flex flex-1 justify-between gap-2 lg:gap-10 scale-95 md:scale-100">
            {/* Actions */}
            <div className="flex lg:flex-1  flex-col shadow-inner shadow-white/40 bg-white/8 p-3   rounded-2xl ">
              <h4 className="font-semibold text-white/95 mb-2">Actions</h4>
              <ul className="flex flex-col gap-4 mt-6 text-sm">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline text-nowrap">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline text-nowrap">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div className=" flex lg:flex-2 flex-col gap-2  ">
              <div className="shadow-inner shadow-white/40 bg-white/8 p-3 rounded-2xl flex-1">
                <h4 className="font-semibold text-white/95 mb-2 sm:px-3">
                  G-Mail
                </h4>
                <p className="text-sm mb-3 sm:px-3">Send Email Now </p>
                <form className="flex flex-col sm:flex-row gap-2 rounded-full p-1  ">
                  <p className="px-3 py-2 text-white/50  md:bg-transparent rounded-md w-full sm:w-auto">
                    devlight61@gmail
                  </p>

                  <Link
                    to="mailto:devlight61@gmail.com"
                    className="flex gap-2 items-center justify-center text-sm bg-white/80 text-black hover:scale-105 px-4 py-2 rounded-full"
                  >
                    <FaGoogle
                      size={20}
                      className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5"
                    />
                    <p> Message</p>
                  </Link>
                </form>
              </div>

              <div className="shadow-inner shadow-white/40 bg-white/8 p-3 rounded-2xl">
                <div className="flex gap-4 mt-2 sm:mt-0 text-xs">
                  <Link to="#" className="hover:underline">
                    Terms of Use
                  </Link>
                  <Link to="#" className="hover:underline">
                    AML Policy
                  </Link>
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" border-t border-gray-800 p-2 md:p-3 flex flex-col sm:flex-row justify-center items-center text-xs rounded-full bg-sky-600/50 ">
          <img src={footlogo} alt="Surdatics Logo" className="w-25 md:w-30" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
