// src/views/pc/sections/Process.jsx
import React, { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';

// 디자인 아이콘(기본)
import IconDesign1 from '@/assets/images/design-icon1.svg';
import IconDesign2 from '@/assets/images/design-icon2.svg';
import IconDesign3 from '@/assets/images/design-icon3.svg';
import IconDesign4 from '@/assets/images/design-icon4.svg';
// 퍼블 아이콘(기본)
import IconPub1 from '@/assets/images/pub-icon1.svg';
import IconPub2 from '@/assets/images/pub-icon2.svg';
import IconPub3 from '@/assets/images/pub-icon3.svg';
import IconPub4 from '@/assets/images/pub-icon4.svg';
// 디자인 아이콘(오버)
import IconDesignOn1 from '@/assets/images/design-icon1-on.svg';
import IconDesignOn2 from '@/assets/images/design-icon2-on.svg';
import IconDesignOn3 from '@/assets/images/design-icon3-on.svg';
import IconDesignOn4 from '@/assets/images/design-icon4-on.svg';
// 퍼블 아이콘(오버)
import IconPubOn1 from '@/assets/images/pub-icon1-on.svg';
import IconPubOn2 from '@/assets/images/pub-icon2-on.svg';
import IconPubOn3 from '@/assets/images/pub-icon3-on.svg';
import IconPubOn4 from '@/assets/images/pub-icon4-on.svg';



const Process = () => {
  const [activeTab, setActiveTab] = useState('design');

  const tabMenus = [
    { id: 'design', label: 'Design' },
    { id: 'publishing', label: 'Publishing' },
  ];

  const processData = {
    design: [
      {
        id: 1,
        // icon: IconDesign1, // 기존 코드 삭제
        iconDefault: IconDesign1,       // 기본 아이콘
        iconHover: IconDesignOn1,   // 마우스오버 아이콘
        title: "Analysis",
        text: "요구사항 분석 및 레퍼런스 리서치"
      },
      {
        id: 2,
        // icon: IconDesign1, // 기존 코드 삭제
        iconDefault: IconDesign2,       // 기본 아이콘
        iconHover: IconDesignOn2,   // 마우스오버 아이콘
        title: "UX Planning",
        text: "사용자 흐름 설계 및 와이어프레임"
      },
      {
        id: 3,
        // icon: IconDesign1, // 기존 코드 삭제
        iconDefault: IconDesign3,       // 기본 아이콘
        iconHover: IconDesignOn3,   // 마우스오버 아이콘
        title: "UI Design",
        text: "디자인 시스템 구축 및 GUI 디자인"
      },
      {
        id: 4,
        // icon: IconDesign1, // 기존 코드 삭제
        iconDefault: IconDesign4,       // 기본 아이콘
        iconHover: IconDesignOn4,   // 마우스오버 아이콘
        title: "UX Prototyping",
        text: "인터랙션 정의 및 프로토타입 제작"
      },
    ],
    publishing: [
      {
        id: 1,
        iconDefault: IconPub1,
        iconHover: IconPubOn1,
        title: "Environment",
        text: "프로젝트 구조 설계 및 환경 설정"
      },
      {
        id: 2,
        iconDefault: IconPub2,
        iconHover: IconPubOn2,
        title: "Structure",
        text: "웹 표준/접근성을 준수한 마크업"
      },
      {
        id: 3,
        iconDefault: IconPub3,
        iconHover: IconPubOn3,
        title: "Styling",
        text: "CSS를 활용하여 레이아웃 및 UI 구현"
      },
      {
        id: 4,
        iconDefault: IconPub4,
        iconHover: IconPubOn4,
        title: "Interaction",
        text: "JS를 활용한 동적 기능 개발"
      },
    ],
  };

  return (
    <section className="process_wrap layout">
      {/* 타이틀 컴포넌트 */}
      <SectionTitle title="Work Process"
        tabs={tabMenus}
        activeTab={activeTab}
        onTabClick={setActiveTab} />

      <div className="process-cont">
        {processData[activeTab].map((item) => (
          <div className="process-card" key={item.id}>

            {/* --- 3. JSX 수정: 이미지 2개를 모두 렌더링 --- */}
            <div className="icon-box">
              <img
                src={item.iconDefault}
                alt={item.title}
                className="icon-default"
              />
              <img
                src={item.iconHover}
                alt={`${item.title} active`}
                className="icon-hover"
              />
            </div>

            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;