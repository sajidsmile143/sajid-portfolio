import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'jQuery', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'SASS', level: 85 },
  { name: 'GSAP', level: 80 },
];

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from('.skill-bar', {
      scaleX: 0,
      duration: 1.5,
      ease: 'power4.out',
      transformOrigin: 'left center',
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.skill-label', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Technical Expertise</h2>
        
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="relative">
              <div className="flex justify-between mb-2">
                <span className="skill-label text-lg font-medium">{skill.name}</span>
                <span className="skill-label text-purple-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};