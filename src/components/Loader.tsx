import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      gsap.to('body', { overflow: 'auto' });
    }, 2000);

    // Lock scroll during loading
    gsap.set('body', { overflow: 'hidden' });

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="relative">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle
            className="text-purple-500 stroke-current"
            strokeWidth="4"
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="251.2"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="2s"
              values="251.2;0"
              repeatCount="1"
            />
          </circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-xl font-bold text-purple-500"
          >
            ⚡
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};