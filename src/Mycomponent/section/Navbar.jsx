import React, { useState } from 'react';
import { Logs, X } from 'lucide-react'; // Added X for the close icon
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="px-4 fixed top-0 w-screen h-16 flex justify-between items-center bg-black/95 backdrop-blur-md z-1000 border-b-2 border-[#00F3FF] shadow-[0_0_20px_rgba(0,243,255,0.5)]">

        {/* Brand */}
        <div className="text-xl md:text-2xl font-black text-[#00F3FF] tracking-[6px] animate-brand-glow uppercase">
          LKS_12
        </div>

        {/* Desktop Menu */}
        <div className="hidden font-bold md:flex gap-7 items-center">
          <a href="#home" className="text-[#00FF88] group relative px-4 py-2 text-md text-neonGreen uppercase tracking-widest border border-transparent hover:border-neonGreen hover:shadow-[0_0_10px_#00ff88] transition-all duration-300">
            <span className="absolute -left-2.5 opacity-0 group-hover:opacity-100 group-hover:-left-1.5 group-hover:text-neonPink transition-all duration-300 font-bold">
              &gt;
            </span>
            HOME
          </a>
          <a href="#about" className="text-[#00FF88] group relative px-4 py-2 text-md text-neonGreen uppercase tracking-widest border border-transparent hover:border-neonGreen hover:shadow-[0_0_10px_#00ff88] transition-all duration-300">
            <span className="absolute -left-2.5 opacity-0 group-hover:opacity-100 group-hover:-left-1.5 group-hover:text-neonPink transition-all duration-300 font-bold">
              &gt;
            </span>
            ABOUT
          </a>
          <a href="#projects" className="text-[#00FF88] group relative px-4 py-2 text-md text-neonGreen uppercase tracking-widest border border-transparent hover:border-neonGreen hover:shadow-[0_0_10px_#00ff88] transition-all duration-300">
            <span className="absolute -left-2.5 opacity-0 group-hover:opacity-100 group-hover:-left-1.5 group-hover:text-neonPink transition-all duration-300 font-bold">
              &gt;
            </span>
            PROJECTS
          </a>
          <a href="#contact"
            className="px-10 rounded-lg py-2 bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black transition-all duration-300 font-bold tracking-tighter shadow-[0_0_15px_#ff00ff]"
          >
            CONTACT_us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00ff88] text-2xl p-2 hover:text-[#00f3ff] transition-colors focus:outline-none"
        >
          {/* Swaps between Logs (Hamburger) and X (Close) */}
          {isOpen ? <X size={32} /> : <Logs size={32} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {/* Fixed: top-16 ensures it sits exactly below the 16 height header */}
        <div className={`${isOpen ? 'flex' : 'hidden'} flex absolute top-16 left-0 w-screen bg-black/95 border-b-2 border-[#00ff88] p-2 gap-4 justify-evenly shadow-xl transition-all duration-500`}>
          <NavLink
            to='/'
            onClick={closeMenu}
            className="text-[#00ff88] hover:text-white uppercase group relative py-1 border border-transparent hover:border-neonGreen hover:shadow-[0_0_10px_#00ff88] transition-all duration-300"
          >
            HOME
          </NavLink>
          <NavLink
            to='/about'
            onClick={closeMenu}
            className="text-[#00ff88] hover:text-white uppercase group relative py-1 border border-transparent hover:border-neonGreen hover:shadow-[0_0_10px_#00ff88] transition-all duration-300"
          >
            ABOUT
          </NavLink>
          <NavLink
            to='/projects'
            onClick={closeMenu}
            className="text-[#00ff88] hover:text-white uppercase group relative py-1  border border-transparent hover:border-neonGreen hover:shadow-[0_0_10px_#00ff88] transition-all duration-300"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to='/contact'
            onClick={closeMenu}
            className="text-[#ff00ff] font-bold border border-[#ff00ff] rounded-lg p-1 bg-transparent hover:bg-[#ff00ff] hover:text-black transition-all duration-300 tracking-tighter shadow-[0_0_15px_#ff00ff]"
          >
            CONTACT
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;