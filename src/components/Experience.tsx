import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    role: 'Senior Frontend Developer',
    period: '2022 - Present',
    location: 'San Francisco, CA',
    description: 'Led the frontend development of multiple high-impact projects, improving performance by 40% and implementing advanced animations.',
    technologies: ['React', 'Next.js', 'TypeScript', 'GSAP']
  },
  {
    company: 'Digital Solutions Ltd.',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    location: 'New York, NY',
    description: 'Developed responsive web applications and implemented modern UI/UX practices across various client projects.',
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript']
  },
  {
    company: 'Creative Web Agency',
    role: 'Junior Developer',
    period: '2018 - 2020',
    location: 'Boston, MA',
    description: 'Started as a junior developer working on various web projects, focusing on frontend development and responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from('.experience-card', {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section id="experience" ref={containerRef} className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-20 bg-purple-500 rounded-full" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">{exp.role}</h3>
                  <p className="text-xl text-white/90 mb-2">{exp.company}</p>
                  <div className="flex items-center gap-4 text-white/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <p className="text-white/80">{exp.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};