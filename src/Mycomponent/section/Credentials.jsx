import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Briefcase } from 'lucide-react';

const achievements = [
    {
        title: "Builders of Tomorrow Summit 2026",
        category: "Event",
        description: "Successfully developed and managed the official event portal and registration system.",
        icon: <Trophy className="text-[#00FF88]" />,
        date: "April 2026"
    },
    {
        title: "Full Stack Web Development",
        category: "Certification",
        description: "Mastered React.js, Tailwind CSS, and Node.js with a focus on high-performance web apps.",
        icon: <Award className="text-[#00FF88]" />,
        date: "2025"
    },
    {
        title: "BCA 3rd Year - Sobhasaria College",
        category: "Academic",
        description: "Maintaining a strong academic record while balancing full-time frontend development.",
        icon: <BookOpen className="text-[#00FF88]" />,
        date: "2023 - 2026"
    },
    {
        title: "Frontend Developer at IT Company",
        category: "Professional",
        description: "Managing large-scale web projects with 9 hours of daily professional coding experience.",
        icon: <Briefcase className="text-[#00FF88]" />,
        date: "Ongoing"
    }
];

const Credentials = () => {
    return (
        <section className="py-20 px-6 bg-[#0B0F1A]" id="credentials">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00FF88] to-[#00C6FF] mb-4 mb-12 text-center"
                >
                    Credentials
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-[#00FF88] transition-all group overflow-hidden"
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 group-hover:shadow-[0_0_10px_#00FF88]">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="text-[12px] uppercase tracking-widest text-[#00FF88] font-semibold">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#00FF88] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                    <p className="text-slate-500 text-[12px] mt-4 font-mono">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Credentials;