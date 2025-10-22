import React from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
interface AboutCardAProps {
  number: string;
  title: string;
  text: string;
  img: string;
  livelink: string;
  siteIMg: string;
  viewState: boolean;
  setViewstate: (state: boolean) => void;
  techTags?: string[];
}

const AboutCardB: React.FC<AboutCardAProps> = ({
  number,
  title,
  text,
  img,
  livelink,
  siteIMg,
  viewState,
  setViewstate,
  techTags = [],
  
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full bg-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg ring-1  ring-white/10 p-4"
    >
      {/* Project Number */}
      <div className="absolute top-6 right-4 bg-pink-500 text-white text-sm font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-lg z-10">
        {number}
      </div>

      {/* Reversed layout */}
      <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
        <motion.img
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md md:w-2/5 rounded-xl border border-pink-300 shadow-md object-cover"
        />

        <div className="flex-1 flex flex-col text-center md:text-start gap-4 md:gap-6">
          <h3 className="text-xl md:text-2xl font-bold text-sky-400">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-200">
            {text}
          </p>

          {techTags.length > 0 && (
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {techTags.map((tag, i) => (
                <span
                  key={i}
                  className="  bg-pink-900/30 text-pink-300 text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <motion.a
              href={livelink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-sky-500 hover:bg-white text-white hover:text-sky-500 border border-transparent hover:border transition-all px-4 py-2 rounded-md font-semibold min-w-20 text-sm"
            >
              Go Live
            </motion.a>

            <motion.button
              onClick={() => setViewstate(true)}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-sky-500 hover:bg-sky-500 hover:text-white border border-sky-500 px-4 py-2 rounded-md font-semibold text-sm transition-all"
            >
              View
            </motion.button>
          </div>
        </div>
      </div>

      <Modal isOpen={viewState} onClose={() => setViewstate(false)}>
        <motion.img
          src={siteIMg}
          alt={title}
          className="rounded-xl w-full max-w-4xl mx-auto shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </Modal>
    </motion.div>
  );
};

export default AboutCardB;
