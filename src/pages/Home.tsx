import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import Workexp from "../components/WorkExp";

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between ">
      <HeroSection />
      <Service />
      <Workexp />
      <Contact />
    </div>
  );
};

export default Home;
