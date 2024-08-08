import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center z-10">
        <h2 className="text-3xl font-bold mb-4 text-green-400">About Me</h2>
        <p className="text-xl text-green-300 mb-6">
          Passionate about AI and product development, I've led innovative projects
          that bridge the gap between technology and user experience.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
