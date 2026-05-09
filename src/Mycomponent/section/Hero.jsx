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
        <div className="z-10 w-full">
          <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[45px] text-[35px] lg:leading-[98px] leading-[1.2] mt-2">
            Hi, I'm <span className="text-[#915EFF] drop-shadow-[0_0_10px_rgba(145,94,255,0.5)]">Lokesh</span>
          </h1>
          
          <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[18px] text-[16px] lg:leading-[40px] leading-[30px] mt-4 max-w-lg">
            I develop {' '}
            <br className="sm:hidden" /> 
            <span className="text-[#00FF88] font-bold">
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

          {/* Responsive CTAs: View Work & Download Resume */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
           
            {/* Secondary Button (Resume) */}
            <a 
              href="/LOKESH SHARMA RESUME.pdf" 
              download
              className="px-6 py-3 sm:px-8 sm:py-3 border-2 border-[#915EFF] text-[#dfd9ff] rounded-lg font-bold tracking-wide hover:bg-[#915EFF] hover:text-white active:scale-95 hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base text-center bg-black/20 hover:bg-opacity-100"
            >
              Download Resume
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