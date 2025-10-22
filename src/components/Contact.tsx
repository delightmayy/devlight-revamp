import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="bg-black  bg-blend-color p-6 lg:p-8 " id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:min-h-5/6   items-center text-white mb-28 lg:mb-0">
        <h1 className=" lg:mt-20 mt-10 p-3 md:py-4 mb-3 lg:mb-8 text-3xl lg:text-5xl font-extrabold  tracking-wider text-white border-b-2 border-pink-500/60 capitalize  ">
          contact<span className="text-sky-500">.</span>
        </h1>
        <div className="text-center flex flex-col gap-4 mt-6  lg:text-lg lg:px-3">
          <p className=" leading-9">
            Let's spark a connection! You can reach me here on
            <Link
              to="https://www.linkedin.com/in/olamilekan-sunday-849001251"
              className=" text-pink-500 
              hover:text-pink-400/50  tracking-wider"
            >
              {" "}
              Linkedin
            </Link>
            , {""}
            <Link
              to="https://wa.me/qr/RN3GSQ3LS6XRB1 "
              className=" text-pink-400 
              hover:text-pink-400/50  tracking-wider"
            >
              Whatsapp
            </Link>
            , or {""}
            <Link
              to="https://www.upwork.com/freelancers/~01739a2b466de3e7fb"
              className=" text-pink-400 
              hover:text-pink-400/50  tracking-wider"
            >
              Upwork
            </Link>
            . Let's chat and see how we can collaborate.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <Link
              to="mailto:devlight61@gmail.com"
              className="flex gap-2 items-center justify-center text-base  font-semibold text-sky-400 
              hover:text-sky-500/50  tracking-wider"
            >
              <FaGoogle
                size={32}
                className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5"
              />
              <p> devlight61@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
