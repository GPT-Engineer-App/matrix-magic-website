import React from 'react';
import { motion } from 'framer-motion';
import MatrixRain from '../components/MatrixRain';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <MatrixRain />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <About />
        <Experience />
        <Contact />
      </motion.div>
    </div>
  );
};

export default Index;
