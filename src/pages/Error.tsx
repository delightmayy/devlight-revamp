import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navHome = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(navHome);
  }, []);

  return (
    <div className="min-h-3/5 text-white pt-4 px-3 pb-6 max-w-7xl mx-auto">
      <div className="pb-4 mt-10">
        <h1 className="font-semibold text-xl text-center text-blue-400">
          ERROR
        </h1>
      </div>
      <div className="flex flex-col gap-3 border rounded-2xl border-white/10 p-4 pb-8  ">
        <div className="flex flex-col justify-center items-center flex-1 text-3xl text-white/40 capitalize p-8">
          page not found
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
