import React, { useState } from 'react'; 
import SectionTitle from '@/components/common/SectionTitle';
import ProfileImg from '@/assets/images/profile-img.png';

const AboutMe = () => {
  // 아코디언 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(false);

  // 토글 함수
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="about_wrap">
      {/* 타이틀 컴포넌트 */}
      <SectionTitle
        title="About Me"
      />

      <div className="about_contents">
        <div className={`accordion_panel ${isOpen ? 'active' : ''}`}>

          <div className="accordion_header" onClick={toggleAccordion}>

            {/* 왼쪽: 프로필 영역 */}
            <div className="left_box">
              <div className="img_area">
                <img src={ProfileImg} alt="프로필" />
              </div>
              <div className="info_text">
                <h3>신민주</h3>
                <div className="badges">
                  <span>#꼼꼼함</span>
                  <span>#책임감</span>
                </div>
              </div>
            </div>

            {/* 가운데: 정보 리스트 */}
            <div className="center_box">
              <dl>
                <div className="row">
                  <dt>NAME</dt>
                  <dd>신민주</dd>
                </div>
                <div className="row">
                  <dt>PHONE</dt>
                  <dd>010-1234-5678</dd>
                </div>
                <div className="row">
                  <dt>EMAIL</dt>
                  <dd>minju@email.com</dd>
                </div>
              </dl>
            </div>

            {/* 오른쪽: 화살표 */}
            <div className="right_box">
              <span className="arrow_icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
          </div>

          {/* --- 2. 바디 (숨겨진 영역) --- */}
          <div className="accordion_body">
            <div className="body_inner">
              <h4>안녕하세요, 사용자 경험을 중요시하는 퍼블리셔입니다.</h4>
              <p>
                이곳에 자기소개, 경력 기술서, 자격증 목록 등을 자유롭게 적으시면 됩니다.<br />
                아코디언이 열리면서 부드럽게 나타납니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;