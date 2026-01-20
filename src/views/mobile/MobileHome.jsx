import React, { useState } from 'react';
import Intro from '@/views/mobile/sections/Intro';
import Profile from '@/views/mobile/sections/Profile';
import AboutMe from '@/views/mobile/sections/AboutMe';
import Skills from '@/views/mobile/sections/Skills';
import Process from '@/views/mobile/sections/Process';
import Portfolio from '@/views/mobile/sections/Portfolio';
import Faq from '@/views/mobile/sections/Faq';
import Contact from '@/views/mobile/sections/Contact';

const MobileHome = () => {
  return (
    <div className="mo-wrap">
      <Intro />
      <Profile />
      <AboutMe />
      <Skills />
      <Process />
      <Portfolio />
      <Faq />
      <Contact />
    </div>
  );
};

export default MobileHome;