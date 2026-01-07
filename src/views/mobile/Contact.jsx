// src/views/pc/sections/Contact.jsx
import React, { useState } from 'react';
import ArrowIcon from '@/assets/images/arrow.svg';
import SectionTitle from '@/components/common/SectionTitle';

const Contact = () => {
  // 모달 열림/닫힘 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 복사 기능 함수
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (err) {
      alert('복사에 실패했습니다.');
    }
  };

  return (
    <section className="contact_wrap layout">
      <div className="contact-cont">
        <SectionTitle title="Contact" />

        <div className="contact-inner">
          <h4>Let’s Build Something Amazing.</h4>
          <p>
            새로운 프로젝트, 즐거운 협업 제안은 언제나 환영합니다.
            <br />준비된 디퍼블리셔 신민주와 함께 성공적인 프로젝트를 시작하세요.
          </p>

          {/* 버튼 클릭 시 모달 열기 */}
          <button type="button" className="btn" onClick={() => setIsModalOpen(true)}>
            <span className="txt">View Contact</span>
            <img src={ArrowIcon} alt="화살표" className="arrow-icon" />
          </button>
        </div>
      </div>

      {/* --- 연락처 모달 (isModalOpen이 true일 때만 렌더링) --- */}
      {isModalOpen && (
        <div className="confirm-modal">
          <div className="modal-cont">
            <h3>Contact Information</h3>

            <div className="info-list">
              {/* 이메일 */}
              <div className="info-item">
                <span className="label">Email</span>
                <div className="value-box">
                  <span className="text">mindooworld@naver.com</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy('shinminju@example.com')}
                  >
                    복사
                  </button>
                </div>
              </div>

              {/* 전화번호 */}
              <div className="info-item">
                <span className="label">Phone</span>
                <div className="value-box">
                  <span className="text">010-4321-7237</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy('010-1234-5678')}
                  >
                    복사
                  </button>
                </div>
              </div>
            </div>

            {/* 하단 확인(닫기) 버튼 */}
            <div className="modal-actions">
              <button
                className="btn"
                onClick={() => setIsModalOpen(false)}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;