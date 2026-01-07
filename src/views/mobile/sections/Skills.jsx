import React, { useState, useEffect, useRef } from 'react'; // useRef 추가 필수!
import SectionTitle from '@/components/common/SectionTitle';
// 스킬 아이콘
import SkillIcon01 from '@/assets/images/skills1.png';
import SkillIcon02 from '@/assets/images/skills2.png';
import SkillIcon03 from '@/assets/images/skills3.png';
import SkillIcon04 from '@/assets/images/skills4.png';

const Skills = () => {
  // 차트 애니메이션 트리거 상태 관리
  const [isAnimated, setIsAnimated] = useState(false);

  // ★ 스크롤 감지를 위한 ref 생성
  const sectionRef = useRef(null);

  // ★ 스크롤이 이 섹션에 도달하면 애니메이션 시작!
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 화면에 10% 이상 보이면 애니메이션 시작
          setIsAnimated(true);
        }
      },
      { threshold: 0.1 } // 민감도 (0.1 = 10% 보일 때)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 스킬 데이터
  const skillGroups = [
    {
      id: 'group1',
      groupTitle: "Publishing & Script",
      list: [
        { id: 1, icon: SkillIcon01, label: "Vue.js", percent: 92 },
        { id: 2, icon: SkillIcon02, label: "React", percent: 85 },
      ]
    },
    {
      id: 'group2',
      groupTitle: "UI & Design",
      list: [
        { id: 3, icon: SkillIcon03, label: "Figma", percent: 95 },
        { id: 4, icon: SkillIcon04, label: "Zeplin", percent: 98 },
      ]
    }
  ];

  return (
    // ★ ref={sectionRef} 추가 (여기를 감시하겠다는 뜻)
    <section className="skills_wrap layout" ref={sectionRef}>
      {/* 타이틀 컴포넌트 */}
      <SectionTitle title="Skills" />

      <div className="skills-cont">
        {/* skills */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group-box" key={group.id}>
              <h4>{group.groupTitle}</h4>

              <div className="group-list">
                {group.list.map((skill) => (
                  <div className="box-cont" key={skill.id}>

                    <div className="cont">
                      <div className="tit">
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
                          // isAnimated가 true가 되면 너비가 늘어남
                          style={{ width: isAnimated ? `${skill.percent}%` : '0%' }}
                        >
                        </div>
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
    </section>
  );
};

export default Skills;