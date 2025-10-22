import Contact from "../components/Contact";
import Workexp from "../components/WorkExp";

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-between text-red-500">
      <Workexp />
      <Contact />
    </div>
  );
};

export default Home;
