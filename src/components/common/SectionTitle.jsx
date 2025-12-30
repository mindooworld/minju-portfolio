import React from 'react';
// ★ 화살표 아이콘 불러오기
import ArrowIcon from '@/assets/images/arrow-2.svg';

const SectionTitle = ({
  title,
  desc,
  tabs,
  activeTab,
  onTabClick,
  showNav,
  onPrevClick,
  onNextClick
}) => {
  return (
    <div className="section-title">
      <div className="title-row">
        <h3>{title}</h3>

        {/* 탭 버튼 영역 */}
        {tabs && (
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* ★ 슬라이드 네비게이션 버튼 */}
        {showNav && (
          <div className="nav-buttons">
            {/* Prev 버튼 (왼쪽) */}
            <button className="nav-btn prev" onClick={onPrevClick} aria-label="이전">
              <img src={ArrowIcon} alt="이전" />
            </button>
            
            {/* Next 버튼 (오른쪽) */}
            <button className="nav-btn next" onClick={onNextClick} aria-label="다음">
              <img src={ArrowIcon} alt="다음" />
            </button>
          </div>
        )}
      </div>

      {desc && <p className="desc">{desc}</p>}
    </div>
  );
};

export default SectionTitle;