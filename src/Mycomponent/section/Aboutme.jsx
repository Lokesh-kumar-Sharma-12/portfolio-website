import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Aboutme = () => {
  const Skills = [
    {
      title: "HTML",
      alt: "HTML icon image",
      icon: "/assets/tech/html.png",
    },
    {
      title: "CSS",
      alt: "CSS icon image",
      icon: "/assets/tech/css.png",
    },
    {
      title: "JavaScript",
      alt: "JavaScript icon image",
      icon: "/assets/tech/javascript.png",
    },
    {
      title: "Tailwind CSS",
      alt: "Tailwind CSS icon image",
      icon: "/assets/tech/tailwind.png",
    }, {
      title: "React",
      alt: "React icon image",
      icon: "/assets/tech/reactjs.png",
    }, {
      title: "Three js",
      alt: "Three js icon image",
      icon: "/assets/tech/threejs.svg",
    },
  ];

  return (
    <div id="About">

      <div className="w-[80%] mt-13 m-auto leading-8 text-center">
        <h2 className="text-4xl font-bold py-1.5 text-transparent bg-clip-text bg-linear-to-r from-[#00FF88] to-[#00C6FF]">Overview.</h2>
        <div className="text-slate-400 mx-auto mt-4 text-secondary text-[17px] max-w-4xl leading-9 gap-0.5">
          I'm a skilled web developer with experience in HTML, CSS and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js, Lenis.js, framer-motion. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </div>
      </div>

      {/* <div className="mt-5  w-[80%] mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2 "> */}
      {/* <div className="w-[80%] mt-5 h-full mx-auto lg:flex lg:gap-8 lg:overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 sm:grid-cols-1 gap-8 scroll-smooth" > */}
      <div className="w-[90%] mx-auto lg:flex lg:gap-10 lg:overflow-x-auto lg:pb-12 lg:snap-x lg:snap-mandatory hide-scrollbar lg:pt-10 lg:px-4 md:grid md:grid-cols-2 sm:grid-cols-1 ">

        {Skills.map((Skill, index) => (

          <Tilt key={index} className="xs:w-[350px] pb-3 h-full w-full flex justify-center">
            <motion.div
              className="w-65 p-px rounded-[20px] shadow-card"
            >
              <div
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-slate-900 rounded-[20px] py-5 px-12 min-h-70 flex justify-evenly items-center flex-col border border-slate-800 hover:border-[#00FF88] transition-all duration-300 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
              >

                <div className="absolute inset-0 bg-linear-to-b from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <img
                  src={Skill.icon}
                  alt={Skill.alt}
                  className="w-16 h-16 object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                />

                {/* 4. TEXT: White text jo hover pe thoda pop kare */}
                <h3 className="text-white text-[20px] font-bold text-center relative z-10 group-hover:text-[#00FF88] transition-colors duration-300">
                  {Skill.title}
                </h3>

              </div>
            </motion.div>

            <div className="absolute -bottom-6.25 left-4 hidden  lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-[#00FF88] z-10 shadow-[0_0_15px_#00FF88] lg:flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute hidden lg:block -bottom-3 z-0 h-1 w-[121%] bg-linear-to-b from-[#00FF88] via-[#00C6FF]"></div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Aboutme;