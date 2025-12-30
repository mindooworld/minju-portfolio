import React from 'react';
import Intro from '@/views/pc/sections/Intro';
import Profile from '@/views/pc/sections/Profile';
import Process from '@/views/pc/sections/Process';

const PcHome = () => {
  return (
    <div className="pc-wrap">
        <Intro />
        <Profile />
        <Process />
    </div>
  );
};

export default PcHome;