import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Code2, Rocket, Palette, ArrowDown } from "lucide-react";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (!containerRef.current || !textRef.current) return;

        const tl = gsap.timeline();

        tl.from(".hero-title span", {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.7)",
        })
            .from(
                ".hero-subtitle",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                },
                "-=0.4"
            )
            .from(
                ".hero-cta",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                },
                "-=0.4"
            )
            .from(
                ".skill-card",
                {
                    opacity: 0,
                    y: 100,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power4.out",
                },
                "-=0.4"
            );

        gsap.to(".scroll-indicator", {
            y: 10,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
            {/* Background Styling */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(128,90,213,0.15),_transparent_80%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

            <div className="relative z-10 max-w-4xl px-6 mx-auto w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-500 font-medium mb-4"
                >
                    Hi there, I'm
                </motion.div>
                <h1
                    ref={textRef}
                    className="hero-title text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
                >
                    <span className="block">Sajid Bhatti</span>
                    <span className="block text-purple-500">Frontend Developer</span>
                </h1>
                <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
                    I craft exceptional digital experiences with modern web technologies,
                    specializing in creating beautiful and performant applications that users love.
                </p>
                <div className="hero-cta flex gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-colors"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full font-medium transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto text-center">
                <div className="skill-card group bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300">
                    <Code2 className="w-12 h-12 text-purple-500 mb-4 group-hover:rotate-12 transition-transform mx-auto" />
                    <h3 className="text-2xl font-semibold mb-2">Clean Code</h3>
                    <p className="text-gray-400">
                        Crafting elegant, maintainable solutions with modern best practices
                    </p>
                </div>

                <div className="skill-card group bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300">
                    <Rocket className="w-12 h-12 text-purple-500 mb-4 group-hover:translate-y-[-4px] transition-transform mx-auto" />
                    <h3 className="text-2xl font-semibold mb-2">Performance</h3>
                    <p className="text-gray-400">Building lightning-fast applications that scale</p>
                </div>

                <div className="skill-card group bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300">
                    <Palette className="w-12 h-12 text-purple-500 mb-4 group-hover:rotate-12 transition-transform mx-auto" />
                    <h3 className="text-2xl font-semibold mb-2">Design</h3>
                    <p className="text-gray-400">
                        Creating stunning interfaces with attention to detail
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
                <span className="text-sm">Scroll Down</span>
                <ArrowDown size={20} />
            </div>
        </section>
    );
};
