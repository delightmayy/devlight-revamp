import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation  } from "react-router-dom";

import { FaSpinner } from "react-icons/fa";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./img/logo.png";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <FaSpinner size={50} className="animate-spin text-white/30 " />
      </div>
    );
  }

  return (
    <div className="bg-black pt-2 pb-3 md:pt-4 lg:pt-6 px-1 md:px-2 ">
      <div className="shadow shadow-white/55 rounded-t-3xl lg:rounded-t-[40px] lg:rounded-b-[40px] rounded-b-3xl border">
        <div className="hidden lg:block absolute -translate-x-1/2 left-1/2 top-5  bg-black p-2 pb-4 px-6 rounded-b-2xl border-b border-white/35 ">
          <img src={logo} alt="Logo" className="w-34 " />
        </div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
