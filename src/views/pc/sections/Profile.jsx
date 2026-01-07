import React, { useState, useEffect } from 'react';

import SectionTitle from '@/components/common/SectionTitle';
import ProfileImg from '@/assets/images/profile-img.png';
import ArrowIcon from '@/assets/images/arrow-2.svg';

// 카드 아이콘
import CardIcon01 from '@/assets/images/card1.svg';
import CardIcon02 from '@/assets/images/card2.svg';
import CardIcon03 from '@/assets/images/card3.svg';

// 스킬 아이콘
import SkillIcon01 from '@/assets/images/skills1.png';
import SkillIcon02 from '@/assets/images/skills2.png';
import SkillIcon03 from '@/assets/images/skills3.png';
import SkillIcon04 from '@/assets/images/skills4.png';

const Profile = () => {
  // 아코디언 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(false);

  // 토글 함수
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const infoList = [
    { label: 'Age', value: '1991년생' },
    { label: 'Phone', value: '010.4321.7237' },
    { label: 'Email', value: 'mindooworld@naver.com' },
  ];

  const bodyCont1 = [
    {
      id: 1,
      icon: CardIcon01,
      title: "Design-savvy Publisher",
      text: "보기 좋은 디자인을 넘어 작동하는 구조를 만들고,개발자의 언어로 구현합니다.디자인 감각과 퍼블리싱 기술을 겸비하여 기획부터 배포까지 매끄러운 연결고리를 만듭니다."
    },
    {
      id: 2,
      icon: CardIcon02,
      title: "Solid Career & Insight",
      text: "대기업 프로젝트의 정교함, 공공기관의 웹 표준 준수, IT 강사의 명쾌한 소통 능력까지. 다양한 현장에서 쌓은 단단한 내공으로 어떤 프로젝트든 유연하게 완수합니다."
    },
    {
      id: 3,
      icon: CardIcon03,
      title: "Deep Dive",
      text: "재능보다 무서운 것은 꾸준함이라 믿습니다. 모르는 것은 알 때까지, 아는 것은 깊어질 때까지 파고듭니다. 성실함이라는 가장 강력한 무기로 기술의 변화 속도를 앞서나가는 노력하는 전문가입니다."
    },
  ];

  // 차트 애니메이션 트리거 상태 관리
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer;

    if (isOpen) {
      timer = setTimeout(() => {
        setIsAnimated(true);
      }, 600);
    } else {
      setIsAnimated(false);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  // 스킬 데이터
  const skillGroups = [
    {
      id: 'group1',
      groupTitle: "Publishing & Script", // 첫 번째 그룹 타이틀
      list: [
        { id: 1, icon: SkillIcon01, label: "Vue.js", percent: 92 },
        { id: 2, icon: SkillIcon02, label: "React", percent: 85 },
      ]
    },
    {
      id: 'group2',
      groupTitle: "UI & Design", // 두 번째 그룹 타이틀
      list: [
        { id: 3, icon: SkillIcon03, label: "Figma", percent: 95 },
        { id: 4, icon: SkillIcon04, label: "Zeplin", percent: 98 },
      ]
    }
  ];

  return (
    <section className="profile_wrap layout">
      {/* 타이틀 컴포넌트 */}
      <SectionTitle title="Profile" />

      <div className="profile_contents">
        <div className={`accordion_panel ${isOpen ? 'active' : ''}`}>

          <div className="accordion_header" onClick={toggleAccordion}>
            {/* ★ 수정 2: class -> className */}
            <div className="profile-cont">

              {/* 왼쪽: 프로필 영역 */}
              <div className="left_box">
                <div className="img_area">
                  <img src={ProfileImg} alt="프로필" />
                </div>
                <div className="info_text">
                  <h3>신민주</h3>
                  <div className="badges">
                    <span>Web Publisher</span>
                    <span>UI Developer</span>
                  </div>
                </div>
              </div>

              {/* 가운데: 정보 리스트 */}
              <div className="center_box">
                <dl>
                  {infoList.map((item, index) => (
                    <div className="row" key={index}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* 오른쪽: 화살표 */}
            <div className="right_box">
              <span className="arrow_icon">
                <img src={ArrowIcon} alt="화살표아이콘" />
              </span>
            </div>
          </div>

          {/* --- 2. 바디 (숨겨진 영역) --- */}
          <div className="accordion_body">
            <div className="body_inner">

              {/* about me */}
              <div className="body-cont">
                <h3>About Me</h3>
                <div className="card-list">
                  {bodyCont1.map((item, index) => (
                    <div className="card" key={index}>
                      <span className="icon">
                        <img src={item.icon} alt={`${item.title} 아이콘`} />
                      </span>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* // about me */}

              {/* skills */}
              <div className="body-cont">
                <h3>Skills</h3>

                <div className="skills-grid">
                  {skillGroups.map((group) => (
                    <div className="skill-group-box" key={group.id}>
                      <h4>{group.groupTitle}</h4>

                      {/* 2. 내부 스킬 리스트 반복 (각 그룹당 2개씩) */}
                      <div className="group-list">
                        {group.list.map((skill) => (
                          <div className="skill-item" key={skill.id}>

                            <div className="skill-info">
                              {skill.icon && (
                                <span className="icon">
                                  <img src={skill.icon} alt={skill.label} />
                                </span>
                              )}
                              <span className="label">{skill.label}</span>
                            </div>

                            <div className="bar-track">
                              <div
                                className={`bar-fill ${group.id === 'group2' ? 'design' : ''}`}
                                style={{ width: isAnimated ? `${skill.percent}%` : '0%' }}
                              >
                              </div>
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
              {/* // skills */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;