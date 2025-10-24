import { motion } from "framer-motion";
type stack = string;

interface works {
  company: string;
  focus: string;
  year: string;
  countrytype: string;
  description: string;
  stacks: stack[];
}
const Works: React.FC<works> = ({
  company,
  focus,
  year,
  countrytype,
  description,
  stacks,
}) => {
  return (
    <div className=" w-full flex flex-col gap-4 overflow-clip ">
      <div className=" p-4 px-6 lg:p-8  border-pink-300/30 border-b rounded-b-lg text-justify">
        <div className="flex justify-between gap-4">
          <div className=" flex flex-col py-3 gap-3">
            <p className=" font-semibold  "> 
              {" "}
              {company} <span className="text-pink-400 text-3xl">.</span>
            </p>
            <motion.p className=" font-semibold   text-sky-400">
              {focus}
            </motion.p>
          </div>
          <div className=" flex flex-col py-3 gap-3">
            <p className=" font-semibold ">{year} </p>
            <p className="font-semibold"> {countrytype} </p>
          </div>
        </div>
        <p className="tracking tracking-wider mt-4 text-center md:text-start text-white/60  hover:text-white/90 ">
          {description}
        </p>

        <div className=" lg:mt-4 pt-4 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-12 ">
          {stacks.map((s, i) => {
            return (
              <motion.p
                key={i}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-white/21 hover:bg-pink-400/40 transition-transform font-semibold cursor-pointer "
              >
                {s}
              </motion.p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Experience = [
  {
    company: "KPA-TECH",
    focus: "Web3 applications",
    year: "2025",
    countrytype: "Nigeria/Remote",
    description:
      "Web3 applications with functionalities like wallet integration, smart contract development, Cryptocurrency payment gateways and decentralized data storage Ensuring responsiveness across all devices.",
    stacks: [
      "React",
      "Web3.JS",
      "Tailwind CSS",
      "dApps",
      "Blockchain",
      "Wallet Integration",
      "Connect AI",
    ],
  },
  {
    company: "Starlit Innovations Ltd",
    focus: "Frontend Developer",
    year: "Present",
    countrytype: "Harrogate, Britain",
    description:
      " UI/UX Implementation, Conversion of figma design into functional and responsive user interfaces using React.js.... Ensuring the application looks and works great on various devices and screensizes.",
    stacks: ["React", " Tailwindcss", "react router", "figma", "Framer-motion"],
  },
  {
    company: "Octopus Metrics",
    focus: "Frontend Developer",
    year: "2023 - 2024",
    countrytype: "Remote",
    description:
      "API Integration: Connect the front-end to the back-end API using Axios for fetching and displaying dataState, State Management: Manage application state using React Context, Client-side Logic: Write JavaScript code to create interactive client-side functionality.",
    stacks: [
      "React",
      " Tailwindcss",
      "react router",
      "Material Ui",
      "React Context",
    ],
  },
  {
    company: "Thefunnelsphere",
    focus: "Frontend Developer",
    year: "2022 - 2023",
    countrytype: "Nigeria/Remote",
    description:
      "Responsive Design: Ensure the application looks and works great on various devices and screen sizes, PHP Integration: Connect the front-end form page to PHP server. Performance Optimization: Ensure fast loading times, smooth animations, and efficient resource usage.",
    stacks: [
      "HTML",
      "JavaScript",
      "PHP",
      " SEO",
      "Bootstrap",
      "Bubble.js",
      "Preloader",
    ],
  },
];

const Workexp = () => {
  return (
    <div className="  bg-black/70 mt-4 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:min-h-screen   items-center text-white border-white/15 rounded-xl border  ">
        {/* ///// HEADING //// */}

        <h1 className=" mt-4 p-3 md:py-4 mb-6 text-3xl lg:text-5xl font-extrabold  tracking-wider text-white border-b-2 border-pink-500  ">
          Experience<span className="text-sky-500">.</span>
        </h1>

        {Experience.map((e, i) => (
          <Works
            company={e.company}
            focus={e.focus}
            year={e.year}
            countrytype={e.countrytype}
            description={e.description}
            stacks={e.stacks}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Workexp;
