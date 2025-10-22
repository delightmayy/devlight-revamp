import { motion } from "framer-motion";
import aboutImg from "../img/aboutImg.png";
import { Link} from "react-router-dom";
import sss from "../img/devlightCV.pdf";
import { FaDownload } from "react-icons/fa";

const About = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="  min-h-3/5 bg-black text-white pt-12 px-4 sm:px-8 pb-6 max-w-7xl mx-auto "
    >
      <div className=" max-w-7xl mx-auto flex flex-col lg:scale-90 rounded-full  xl:rounded-full sm:rounded-[80px] bg-sky-400/22 border-pink-400/30 sm:border-pink-400/50 border items-center text-white ">
        <h1
          id="aboutSection"
          className="py-3 md:py-4 px-4 lg:py-4 mt-10 md:mt-12  md:my-12 lg:my-8 mb-6 text-3xl lg:text-5xl font-extrabold  tracking-wider text-white border-b-2  border-pink-500 "
        >
          About<span className="text-sky-500">.</span>
        </h1>

        <div className=" flex flex-col lg:flex-row md:px-24 lg:ms-18 lg:pe-18 px-2 sm:px-8   gap-8 justify-between mb-4 lg:mb-32 xl: items-center  md:mb-20 lg:pb-0">
          <motion.div
            initial={{ translateY: 200 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-3 flex flex-col gap-3 lg:gap-4  xl:pt-4 px-2  sm:leading-8 text-center lg:text-start  xl:gap-8  2xl:gap-8 overflow-hidden"
          >
            <p className="">
              <span className=" text-3xl font font-extrabold mt-3 ">Hey</span>{" "}
              there! I'm <span className="text-pink-500">Devlight</span>, a
              frontend developer from Lagos, Nigeria, with a passion for
              crafting amazing digital experiences.
            </p>
            <p className="">
              I've worked with diverse teams to build innovative products,
              including personal branding websites, corporate business
              solutions, healthcare platforms, NGO websites, file management
              systems and Web3 applications.
            </p>
            <p className="hidden sm:block">
              Beyond coding, I'm driven by a desire to give back to the
              community{" "}
              {/* , which is why I've volunteered with organizations like
              Starlit Innovations Ltd... */}
            </p>
            <p className="hidden sm:block">
              I'm now seeking exciting new opportunities where I can combine my
              love for code with real-world problem-solving. If you've got a
              project or role that aligns with my skills and passions, let's
              connect and build something awesome together.
            </p>
            <div className="px-6">
              <Link
                to={sss}
                target="blank"
                className="mt-8 lg:mt-10 flex gap-3 items-center justify-center md:tracking-wider px-4  md:px-6 py-0.5 rounded-3xl bg-pink-500/55 font-semibold cursor-pointer"
              >
                <p className="p-1">Preview cv</p>
                <FaDownload size={34} className="w-3 mt-0.5 shadow-2xl" />
              </Link>
            </div>
          </motion.div>
          <div className="flex-2 sm:hidden xl:block   mx-auto pb-0 ">
            <motion.img
              src={aboutImg}
              alt=""
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: [0, 20, 0] }}
              transition={{ duration: 3, delay: 0.3, repeat: Infinity }}
              className="  h-auto w-100 md:w-100 md:mt-8 lg:w-500 lg:h-120 xl:h-11/12  rounded-b-full lg:rounded-bl-none lg:rounded-e-full bg-black/60  shadow shadow-white "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
