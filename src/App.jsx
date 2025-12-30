import React, { useState, useEffect } from 'react';
import { isMobile as isMobileUserAgent } from 'react-device-detect'; 
import PcHome from './views/pc/PcHome';
import MobileHome from './views/mobile/MobileHome';
import './styles/main.scss';

function App() {
  // 초기값 설정
  const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      // 화면 너비가 1024px 이하면 true, 아니면 false
      setIsMobileWidth(window.innerWidth <= 1024);
    };

    // 창 크기가 변할 때마다 감시
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showMobile = isMobileUserAgent || isMobileWidth;

  return (
    <div className="app-container">
      {/* 조건에 따라 둘 중 하나만 보여줌 */}
      {showMobile ? <MobileHome /> : <PcHome />}
    </div>
  );
}

export default App;