import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import budgetImage from "../assets/images/budget.jpg";
import weatherImage from "../assets/images/weather.jpg";
import portfolioImage from "../assets/images/portfolio.jpg";
import electralithImage from "../assets/images/image.png";

const projects = [
    {
        title: "Modren Portfolio",
        description: "Real-time chat app with AI-powered responses",
        image: portfolioImage,
        tags: ["React", "Tailwind css", "Motion", "TypeScript", "GSAP"],
        github: "https://github.com/sajidsmile143?tab=repositories",
        live: "https://sajidbhatti-portfolio.vercel.app/",
    },
    {
        title: "Budget Tracker",
        description: "A full-stack Budget Tracker",
        image: budgetImage,
        tags: ["Html", "Css", "Javascript"],
        github: "https://github.com/sajidsmile143?tab=repositories",
        live: "https://budget-tracker-sigma-sandy.vercel.app/",
    },
    {
        title: "ElectraLith",
        description: "The future of lithium production is here.",
        image: electralithImage,
        tags: ["Html", "Css", "Javascript"],
        github: electralithImage,
        live: "https://budget-tracker-sigma-sandy.vercel.app/",
    },

    {
        title: "Weather App",
        description: "Dynamic portfolio generator with customizable themes",
        image: weatherImage,
        tags: ["React", "GSAP", "Tailwind CSS", "API Integration"],
        github: "https://github.com/sajidsmile143?tab=repositories",
        live: "https://weather-app-six-psi-95.vercel.app/",
    },
];

export const Projects = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.from(".project-card", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center+=100",
                end: "bottom center",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <section id="projects" ref={containerRef} className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-center"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
