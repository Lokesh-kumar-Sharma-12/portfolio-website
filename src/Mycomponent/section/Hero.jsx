import { motion } from "framer-motion";
// import Computers from '../canvas/Computers'
import heroBg from '../../../public/assets/herobg.png';

const Hero = () => {
  return (
    <>
      <section style={{ backgroundImage: `url(${heroBg})` }} className={`mx-auto pt-20 w-full bg-cover bg-center bg-no-repeat`}>
        <div
          className={` inset-0 top-30 mx-auto ml-3.5 max-w-7xl flex flex-row items-start gap-5`}
        >
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div className="w-full ml-1.5 sm:top-0">
            <h1 className='text-white text-5xl lg:text-8xl font-bold'>
              Hi, I'm <span className="text-[#915EFF]">Lokesh kumar sharma</span>
            </h1>
            <h1 className={`text-white-100 mt-2  text-4xl font-bold`}>
              <p>I develop 3D visuals, user</p>
              <p>interfaces and web applications</p>
            </h1>
          </div>
        </div>
        {/* <div className="h-screen pointer-events-none ">
          <Computers />
        </div> */}

        <div className="pt-20 bottom-1  w-full flex justify-center items-center z-20">
          <a href="#about">
            <div className="w-9 h-16 rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0], // Upar-niche move karega
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
              />
            </div>
          </a>
        </div>
      </section >
    </>
  );
};

export default Hero;