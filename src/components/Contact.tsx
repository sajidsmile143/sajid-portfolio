import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        gsap.from(".contact-content", {
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
        <section id="contact" ref={containerRef} className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-center"
                >
                    Let's Connect
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="contact-content space-y-8">
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-semibold mb-4">GOT A PROJECT IN MIND?</h3>
                            <p className="text-white/80 mb-6">
                                I'm always open to new opportunities and interesting projects. Let's
                                create something amazing together!
                            </p>
                            <a
                                href="mailto:your.email@example.com"
                                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                <Mail size={20} />
                                sajidsmile143@gmail.com
                            </a>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="p-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="#"
                                    className="p-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="#"
                                    className="p-3 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                                >
                                    <Twitter size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-content">
                        <form className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="sajidsmile143@gmail.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-white/80 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Your message"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
