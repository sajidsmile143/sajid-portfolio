import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          setActiveSection(section.id.charAt(0).toUpperCase() + section.id.slice(1));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 hidden md:block transition-all duration-300',
          scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              <span className="text-white">M</span>
              <span className="text-purple-500">SB</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </motion.div>
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: navItems.indexOf(item) * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item)}
                    className={clsx(
                      'text-lg font-medium transition-all duration-300 relative group',
                      activeSection === item
                        ? 'text-purple-500'
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {item}
                    <span className={clsx(
                      'absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform transition-transform duration-300',
                      activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )} />
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden fixed top-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-full bg-purple-500/20 backdrop-blur-lg border border-purple-500/20"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed inset-y-0 right-0 z-40 w-64 bg-black/95 backdrop-blur-lg md:hidden border-l border-purple-500/20"
      >
        <div className="p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-8"
          >
            <span className="text-white">M</span>
            <span className="text-purple-500">SB</span>
          </motion.div>
          <ul className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item)}
                  className={clsx(
                    'text-xl font-medium transition-colors duration-300 relative group',
                    activeSection === item
                      ? 'text-purple-500'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {item}
                  <span className={clsx(
                    'absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 transform transition-transform duration-300',
                    activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )} />
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};