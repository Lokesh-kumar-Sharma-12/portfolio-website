import React, { useRef, useState } from 'react';
// 1. PROJECT DATA
const projects = [
    {
        id: 1,
        title: "Netflix Clone",
        description: "A full-featured streaming platform clone with movie trailers and user authentication.",
        image: "/assets/Netflix India.PNG",
        tech: ["HTML", "CSS", "java script"],
        liveLink: "https://google.com",
        githubLink: "https://github.com",
    },
    {
        id: 2,
        title: "Swiggy Clone",
        description: "Food delivery app interface with real-time cart updates and Item's detection features.",
        image: "/assets/Swiggy Clone.PNG",
        tech: ["HTML", "Tailwind CSS","java script"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 3,
        title: "Online shop system",
        description: "A responsive e-commerce platform featuring product listings, shopping cart functionality, and checkout simulation.",
        image: "/assets/Shop online.PNG",
        tech: ["HTML","Tailwind CSS", "React"],
        liveLink: "https://google.com",
        githubLink: "https://github.com",
    },
    {
        id: 4,
        title: "Music player card",
        description: "A stylish and interactive music player component with play/pause controls and song progress tracking.",
        image: "/assets/Music.PNG",
        tech: ["HTML", "Tailwind CSS", "java script"],
        liveLink: "#",
        githubLink: "#",

    },
    {
        id: 5,
        title: "Task Manager",
        description: "A productivity tool to organize daily tasks efficiently, featuring task addition, deletion, and status updates.",
        image: "/assets/Time to focus.PNG",
        tech: ["React", "Tailwind CSS", "React"],
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 6,
        title: "Quiz App",
        description: "An interactive quiz application that tests user knowledge with multiple-choice questions and instant score tracking.",
        image: "/assets/Simple JS Quiz .PNG",
        tech: ["React", "Tailwind CSS", "Java script"],
        liveLink: "#",
        githubLink: "#",
    }
];

const Project = () => {
    // --- LOGIC START ---
    const scrollRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    // Slider Functions (Desktop)
    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 500;
        }
    };

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 500;
        }
    };
    // --- LOGIC END ---

    return (
        <div className="pt-16 bg-slate-950 text-white" id="projects">
            <div className="container mx-auto">

                {/* Section Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00FF88] to-[#00C6FF] mb-4">
                        My Projects
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Here are some of the projects I've worked on. Each one presented its own unique challenges and learning opportunities.
                    </p>
                </div>

                {/* --- SLIDER WRAPPER (Relative for positioning arrows) --- */}
                <div className="relative group/slider">

                    {/* Left Button (Desktop Only) */}
                    <button
                        onClick={slideLeft}
                        className="hidden lg:block absolute top-1/2  z-10 -translate-y-1/2 bg-slate-800/80 p-3 rounded-full text-[#00FF88] hover:bg-slate-700 transition-all opacity-0 group-hover/slider:opacity-100 hover:scale-110 border border-slate-600"
                    >
                        &#10094;
                    </button>


                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef} // REF Added here
                        className="w-[90%] mx-auto my-auto lg:flex lg:gap-8 lg:overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar md:grid md:grid-cols-2 sm:grid-cols-1 md:pb-4 gap-8 scroll-smooth"
                    >
                        {/* <div className="w-[90%] mx-auto my-auto lg:flex lg:gap-8 lg:overflow-x-auto snap-x snap-mandatory pb-10 hide-scrollbar md:grid md:grid-cols-2 sm:grid-cols-1 md:pb-4 gap-8"></div>    */}
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                // LOGIC ADDED: Mobile pe index > 3 hide rahenge jab tak button na dabaye
                                className={`
                                    ${index >= 3 && !showAll ? 'hidden lg:flex' : 'flex'}
                                    md:min-w-87.5  min-w-75 mb-3 snap-center flex-col group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-[#00FF88]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:-translate-y-2
                                `}
                            >
                                {/* Project Image Area */}
                                <div className="h-48 overflow-hidden relative w-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center"></div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00FF88] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3 grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-xs font-medium px-3 py-1 bg-slate-800 text-[#00FF88] rounded-full border border-slate-700/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4 mt-auto">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 px-4 rounded-lg bg-linear-to-r from-[#00FF88] to-[#00C6FF] text-black font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#00FF88]/20"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 px-4 rounded-lg border border-slate-600 hover:border-white hover:bg-slate-800 transition-all text-white text-sm"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Button (Desktop Only) */}
                    <button
                        onClick={slideRight}
                        className="hidden lg:block absolute top-1/2 right-5.75  z-10 -translate-y-1/2 bg-slate-800/80 p-3 rounded-full text-[#00FF88] hover:bg-slate-700 transition-all opacity-0 group-hover/slider:opacity-100 hover:scale-110 border border-slate-600"
                    >
                        &#10095;
                    </button>
                </div>

                {/* --- MOBILE SHOW MORE BUTTON --- */}
                {/* Agar projects 3 se zyada hain tabhi mobile pe button dikhega */}
                {projects.length > 3 && (
                    <div className="flex justify-center mb-8 lg:hidden">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2 rounded-full border border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-all duration-300 font-semibold text-sm"
                        >
                            {showAll ? 'Show Less' : 'Show More Projects'}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Project;