import offer1 from "../img/offer1.png";
import offer2 from "../img/offer2.png";
import offer3 from "../img/offer3.png";
import service1 from "../img/service1.png";
import service2 from "../img/service2.png";
import service3 from "../img/service3.png";
import service4 from "../img/service4.png";

import { motion } from "framer-motion";

interface ServiceCardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

interface OfferCardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
}

const offers = [
  {
    img: offer1,
    alt: "Modern Frontend Engineering",
    title: "Modern Frontend Engineering",
    description:
      "I build fast, scalable, and maintainable frontend architectures using React.js, TypeScript, and Tailwind CSS—ensuring smooth performance across all devices.",
  },
  {
    img: offer2,
    alt: "UI/UX Collaboration",
    title: "UI/UX Collaboration",
    description:
      "I collaborate with UI designers to bring Figma prototypes to life, allowing for visual previews and early corrections before development.",
  },
  {
    img: offer3,
    alt: "Cross-Platform Development",
    title: "Cross-Platform Development",
    description:
      "With React Native and responsive design principles, I deliver consistent, high-quality experiences across both web and mobile devices.",
  },
];

const services = [
  {
    img: service1,
    alt: "Website Development",
    title: "Website Development",
    description:
      "Build responsive, modern, and optimized websites using React and Tailwind. Focused on clean code, accessibility, and smooth user experience.",
  },
  {
    img: service2,
    alt: "UI Implementation",
    title: "UI Implementation",
    description:
      "Convert Figma or design prototypes into fully interactive web pages with precise layout, modern animations, and optimized performance.",
  },
  {
    img: service3,
    alt: "Web3 Integration",
    title: "Web3 Integration",
    description:
      "Integrate wallet connections, token events, and blockchain features for decentralized apps (dApps) using React + Anchor + Solana.",
  },
  {
    img: service4,
    alt: "Optimization & Maintenance",
    title: "Optimization & Maintenance",
    description:
      "Improve loading speed, SEO, and performance through code refactoring, lazy loading, and real-time monitoring.",
  },
];

export const ServiceCard = ({
  img,
  alt,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 lg:gap-2 border-1 border-white/20 p-4 py-6 rounded-bl-3xl rounded-tr-3xl hover:border-sky-500/30 hover:shadow hover:shadow-pink-300/50
    "
    >
      <img src={img} alt={alt} className="w-18 p-2" />
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-semibold text-center text-white/85">{title}</h1>
        <p className="text-center px-4 md:text-white/40 text-white/70 hover:text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};

export const OfferCard = ({ img, alt, title, description }: OfferCardProps) => {
  return (
    <div className="flex flex-col max-w-sm  lg:flex-row justify-center items-center lg:items-start gap-4 lg:gap-2">
      <motion.img
        src={img}
        alt={alt}
        initial={{ scale: 1 }}
        whileInView={{ scale: [1, 0.7, 1] }}
        transition={{ duration: 6, delay: 0.5, repeat: Infinity }}
        className="w-14 md:w-18 p-2"
      />
      <div className="flex flex-col justify-center items-center lg:items-start gap-2">
        <h1 className="font-semibold text-center lg:text-start lg:ps-4 text-white">
          {title}
        </h1>
        <p className="text-center lg:text-start px-4 md:text-white/40 text-white/70 hover:text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="flex flex-col gap-6 mt-8 pt-1 py-4 px-4 pb-4 max-w-7xl mx-auto">
      <div className="flex justify-center items-center px-4">
        <h1 className=" p-3 md:py-4 text-center text-3xl lg:text-5xl font-extrabold   tracking-wider text-white border-b-2 border-pink-500  ">
          Services &{" "}
          <span className="text-nowrap">
            Offers <span className="text-sky-500">.</span>
          </span>
        </h1>
      </div>

      {/* Offers */}
      <div className="flex flex-col gap-6 mt-4  md:gap-12 justify-center border border-white/10 rounded py-6 items-center">
        <h1 className="font-bold text-lg text-sky-500 md:text-2xl md:tracking-widest">
          What do I offer <span className="text-white/60">?</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col gap-6 md:gap-12 justify-center items-center mt-12">
        <h1 className="font-bold text-lg text-sky-500 md:text-2xl md:tracking-widest">
          My Services <span className="text-white/60">.</span>
        </h1>
        <div className="flex flex-col md:w-md lg:w-full lg:flex-row gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
