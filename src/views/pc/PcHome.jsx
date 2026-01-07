import React, { useState } from 'react';
import Intro from '@/views/pc/sections/Intro';
import Profile from '@/views/pc/sections/Profile';
import Process from '@/views/pc/sections/Process';
import Portfolio from '@/views/pc/sections/Portfolio';
import Faq from '@/views/pc/sections/Faq';
import Contact from '@/views/pc/sections/Contact';

const PcHome = () => {
  return (
    <div className="pc-wrap">
        <Intro />
        <Profile />
        <Process />
        <Portfolio />
        <Faq />
        <Contact />
    </div>
  );
};

export default PcHome;