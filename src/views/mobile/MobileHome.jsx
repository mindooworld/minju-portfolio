import React, { useState } from 'react';
import Intro from '@/views/mobile/sections/Intro';
import Profile from '@/views/mobile/sections/Profile';
import AboutMe from '@/views/mobile/sections/AboutMe';
import Skills from '@/views/mobile/sections/Skills';
import Process from '@/views/mobile/sections/Process';
import Portfolio from '@/views/mobile/sections/Portfolio';

const MobileHome = () => {
  return (
    <div className="mo-wrap">
      <Intro />
      <Profile />
      <AboutMe />
      <Skills />
      <Process />
      <Portfolio />
    </div>
  );
};

export default MobileHome;