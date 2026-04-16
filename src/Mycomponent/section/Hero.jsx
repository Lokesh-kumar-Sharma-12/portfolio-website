import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import heroBg from '../../../public/assets/herobg.webp';

const Hero = () => {
  return (
    <section 
      style={{ backgroundImage: `url(${heroBg})` }} 
      className="relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Dark overlay for mobile to make text pop */}
      <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        {/* Left Side: Animated Line (Back to Purple) */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-[0_0_15px_#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        {/* Text Content */}
        <div className="z-10">
          <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[45px] text-[35px] lg:leading-[98px] leading-[1.2] mt-2">
            Hi, I'm <span className="text-[#915EFF] drop-shadow-[0_0_10px_rgba(145,94,255,0.5)]">Lokesh</span>
          </h1>
          
          <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] mt-4 max-w-lg">
            I develop {' '}
            <br className="sm:hidden" /> 
            <span className="text-[#00FF88] font-bold"> {/* Typewriter Green hi rakha hai kyunki wo highlight point hai */}
              <Typewriter
                words={['3D Visuals', 'User Interfaces', 'Web Applications', 'Modern Portfolios']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          {/* Mobile CTA: View Work Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 lg:hidden"
          >
            <a href="#About" className="px-8 py-3 bg-[#915EFF] text-white rounded-lg font-bold shadow-[0_0_15px_rgba(145,94,255,0.4)] active:scale-95 transition-all inline-block">
              About me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF]/60 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-[#915EFF] shadow-[0_0_10px_#915EFF]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;