import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import PcHome from './views/pc/PcHome';       // PC 메인
import MobileHome from './views/mobile/MobileHome'; // 모바일 메인
import './styles/main.scss'; // 전역 스타일 불러오기

function App() {
  return (
    <div className="app-container">
      {/* PC 브라우저에서 접속했을 때만 렌더링 */}
      <BrowserView>
        <PcHome />
      </BrowserView>

      {/* 모바일에서 접속했을 때만 렌더링 */}
      <MobileView>
        <MobileHome />
      </MobileView>
    </div>
  );
}

export default App;