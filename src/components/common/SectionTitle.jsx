import React from 'react';

const SectionTitle = ({ title, desc, tabs, activeTab, onTabClick }) => {
  return (
    <div className="section-title">
      <div className="title-row">
        <h3>{title}</h3>

        {/* ★ tabs 데이터가 있을 때만 탭 버튼 렌더링 */}
        {tabs && (
          <div className="tab-buttons">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                // 현재 선택된 탭이면 'active' 클래스 추가
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {desc && <p className="desc">{desc}</p>}
    </div>
  );
};

export default SectionTitle;