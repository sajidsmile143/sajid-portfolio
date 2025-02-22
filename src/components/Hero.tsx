import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/images/sajid.jpg";
export const Hero = () => {
    const roles = [
        "Frontend Developer",
        "React Developer",
        "Next.js Developer",
        "Tailwind Developer",
        "Sass Developer",
    ];

    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen bg-black text-white flex items-center justify-center px-10"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Static Intro & Animated Text */}
                <div>
                    <div className="text-purple-500 font-medium mb-4">Hi there, I'm</div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                        <span className="block mb-4">Sajid Bhatti</span>
                        <span className="block text-purple-500 h-16 relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roles[roleIndex]}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mt-4">
                        I build modern, scalable, and beautiful web applications with React,
                        Next.js, and Tailwind CSS.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <motion.img
                        src={profileImage}
                        alt="Sajid Bhatti"
                        className="w-80 h-80 md:w-[300px] md:h-96 object-cover rounded-full border-4 border-purple-500 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </div>
            </div>
        </section>
    );
};
