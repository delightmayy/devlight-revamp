import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroimg from "../img/global.png";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-22 lg:px-10 lg:min-h-4/5 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-clip w-full ">
      {/* Left Column */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-16 text-white lg:max-w-60">
          Hi 👋, I’m <span className="text-sky-400">Devlight</span>
        </h1>

        <h2 className="text-xl md:text-2xl min-h-10 font-semibold text-white/80">
          <Typewriter
            words={[
              "Personal Branding",
              "Corperate/ Business",
              "Healthcare",
              "web-3",
              "Non-profit Organization",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          I’m a developer passionate about building high-performance, visually
          engaging websites that bring ideas to life through user-focused
          design.
          
          <span className="hidden sm:inline-block mt-4">
            Join me on this exciting journey of turning concepts into stunning
            digital experiences that drive results. Let's collaborate to create
            something amazing together!
          </span>
        </p>

        <div className="flex justify-center lg:justify-start mt-4">
          <Link
            to="portfolio"
            className="px-8 py-3  font-medium  bg-white/5 rounded-full text-sm hover:bg-black hover:text-sky-500 text-white border-r border-t border-t-blue-500/40 border-l border-l-blue-500/40 border-pink-500 border-b border-b-pink-500/50 "
          >
            View My Work
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <motion.div
        className="flex-1 flex justify-center items-center "
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // slow smooth spin
        }}
      >
        <img
          src={heroimg}
          alt="Developer at work"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover md:shadow-inner scale-110 shadow-pink-500/30"
        />
      </motion.div>
    </section>
  );
}
