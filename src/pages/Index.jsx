import React from 'react';
import MatrixRain from '../components/MatrixRain';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <MatrixRain />
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Tony Beltramelli</h1>
        <p className="text-xl text-green-300 mb-6">AI and Product @ Miro | Co-founder & CEO @ Uizard (acquired by Miro)</p>
        <div className="space-y-2">
          <p className="text-green-200">Forbes 30 Under 30</p>
          <p className="text-green-200">ETH Zurich Alumni</p>
          <p className="text-green-200">Based in Copenhagen, Denmark</p>
        </div>
        <div className="mt-8">
          <a href="http://tony.link" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline">
            Visit my website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
