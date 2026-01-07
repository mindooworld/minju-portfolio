// src/views/pc/sections/Process.jsx
import React, { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
// EffectCards 삭제하고 EffectCreative 추가!
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative'; // css도 변경

// 디자인 아이콘(오버용을 기본으로 사용)
import IconDesignOn1 from '@/assets/images/design-icon1-on.svg';
import IconDesignOn2 from '@/assets/images/design-icon2-on.svg';
import IconDesignOn3 from '@/assets/images/design-icon3-on.svg';
import IconDesignOn4 from '@/assets/images/design-icon4-on.svg';
// 퍼블 아이콘(오버용을 기본으로 사용)
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
        icon: IconDesignOn1, // 하나로 통일
        title: "Analysis",
        text: "요구사항 분석 및 레퍼런스 리서치"
      },
      {
        id: 2,
        icon: IconDesignOn2,
        title: "UX Planning",
        text: "사용자 흐름 설계 및 와이어프레임"
      },
      {
        id: 3,
        icon: IconDesignOn3,
        title: "UI Design",
        text: "디자인 시스템 구축 및 GUI 디자인"
      },
      {
        id: 4,
        icon: IconDesignOn4,
        title: "UX Prototyping",
        text: "인터랙션 정의 및 프로토타입 제작"
      },
    ],
    publishing: [
      {
        id: 1,
        icon: IconPubOn1,
        title: "Environment",
        text: "프로젝트 구조 설계 및 환경 설정"
      },
      {
        id: 2,
        icon: IconPubOn2,
        title: "Structure",
        text: "웹 표준/접근성을 준수한 마크업"
      },
      {
        id: 3,
        icon: IconPubOn3,
        title: "Styling",
        text: "CSS를 활용하여 레이아웃 및 UI 구현"
      },
      {
        id: 4,
        icon: IconPubOn4,
        title: "Interaction",
        text: "JS를 활용한 동적 기능 개발"
      },
    ],
  };

  return (
    <section className="process_wrap layout">
      <SectionTitle
        title="Work Process"
        tabs={tabMenus}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />

      <div className="process-cont" key={activeTab}>
        <Swiper
          grabCursor={true}
          effect={'creative'}
          modules={[EffectCreative]}
          className="process-swiper"

          creativeEffect={{
            limitProgress: 2,
            prev: {
              shadow: false,
              translate: ['-100%', 0, -200],
            },
            next: {
              shadow: true,
              translate: ['20px', 0, -80],
              scale: 0.95,
              opacity: 1,
            },
          }}
        >
          {processData[activeTab].map((item) => (
            <SwiperSlide key={item.id} className="process-card">
              <div className="card-inner">
                <div className="icon-box">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Process;