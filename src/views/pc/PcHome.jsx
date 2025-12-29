import React from 'react';
import Intro from '@/views/pc/sections/Intro';
import AboutMe from '@/views/pc/sections/AboutMe';

const PcHome = () => {
  return (
    <div className="pc-wrap">
        <Intro />
        <AboutMe 
        />
    </div>
  );
};

export default PcHome;