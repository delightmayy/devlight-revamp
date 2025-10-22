import { useState } from "react";

import AboutCardA from "../components/AboutCardA";
import AboutCardB from "../components/AboutCardB";

import KPA from "../img/kpaView.jpg";
import HEALTH from "../img/health.jpg";
import FUNNEL from "../img/funnelsphere.jpg";
import QAIG from "../img/qagai.jpg";
import TOP from "../img/topair.jpg";
import KFIRM from "../img/newkpa.jpg";
import OIO from "../img/OIO.jpg";
import TEL from "../img/allinone.jpg";

const projects = [
  {
    number: "01",
    title: "AI / Web3",
    text: "QAAG AI (Quality Assurance AGENT) is a cutting-edge WEB2/WEB3 solution...",
    img: QAIG,
    live: "https://qaagai.netlify.app/",
  },
  {
    number: "02",
    title: "Web3",
    text: "-Join the airdrop and become an early part of The Open Protocol revolution...",
    img: TOP,
    live: "https://topair.netlify.app/",
  },
  {
    number: "03",
    title: "Tech Firm / KPA-TECH",
    text: "KPA Technologies is an innovative tech company which serves regional and international customers...",
    img: KFIRM,
    live: "https://kpatech.net/",
  },
  {
    number: "04",
    title: "Tech Firm / OIO",
    text: "OiO - a modern web agency helping startups and brands create powerful online experiences...",
    img: OIO,
    live: "https://oiosample.netlify.app/",
  },
  {
    number: "05",
    title: "Corporate / Business",
    text: "KPA-TECH is a technology-driven firm specializing in the design and deployment of digital solutions...",
    img: KPA,
    live: "https://kpatech.netlify.app/Portfolio",
  },
  {
    number: "06",
    title: "Portfolio",
    text: "We craft data-driven sales funnels that act as the powerhouse behind your online presence...",
    img: FUNNEL,
    live: "https://www.thefunnelsphere.com/",
  },
  {
    number: "07",
    title: "Health Care",
    text: "For privacy reasons, the actual project cannot be showcased publicly. However, this mimic version demonstrates similar functionality...",
    img: HEALTH,
    live: "https://pro-dashboard-project.netlify.app/",
  },
  {
    number: "08",
    title: "All in One Telegram App",
    text: "Unlock skills, earn rewards, and level up your future — right inside Telegram...",
    img: TEL,
    live: "https://fribie.netlify.app/home",
  },
];

const Portfolio = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div
      onDoubleClick={() => setActiveCard(null)}
      className={` bg-black/95 bg-blend-overlay min-h-screen flex-1 flex flex-col max-w-7xl mx-auto items-center text-white ${
        activeCard !== null ? "backdrop-blur-lg" : "blur-none"
      }`}
    >
      {/* Header */}
      <div className="bg-black h-50 lg:h-60 w-full flex flex-col justify-center items-center px-6 md:px-8 font-semibold">
        <p className="md:mt-8 text-center text-2xl tracking-wider md:text-3xl lg:text-4xl lg:mt-4 lg:pb-8">
          Your trusted partner in driving growth and innovation.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 pb-10 lg:pb-20 p-6 lg:px-8 backdrop-blur-[14px]">
        {/* Decorative Blurs */}
        <div className="absolute blur-[70px] p-10 md:p-12 md:blur-[100px] md:top-14 lg:p-20 bg-pink-400/60 top-24 left-16 lg:blur-[130px]"></div>
        <div className="absolute blur-[105px] p-14 right-10 bottom-4 md:p-18 md:blur-[100px] md:bottom-14 lg:p-20 bg-pink-400/60 lg:bottom-10 lg:blur-[120px]"></div>

        {projects.map((project, i) => {
          const CardComponent = i % 2 === 0 ? AboutCardB : AboutCardA; // alternate layout
          return (
            <CardComponent
              key={i}
              number={project.number}
              title={project.title}
              text={project.text}
              img={project.img}
              livelink={project.live}
              siteIMg={project.img}
              viewState={activeCard === i}
              setViewstate={() => setActiveCard(activeCard === i ? null : i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
