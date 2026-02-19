import React, { useState } from 'react';
import ArrowIcon from '@/assets/images/arrow.svg';
import SectionTitle from '@/components/common/SectionTitle';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
      // eslint-disable-next-line no-unused-vars
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

          <button type="button" className="btn" onClick={() => setIsModalOpen(true)}>
            <span className="txt">View Contact</span>
            <img src={ArrowIcon} alt="화살표" className="arrow-icon" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="confirm-modal">
          <div className="modal-cont">
            <h3>Contact Information</h3>

            <div className="info-list">
              {/* 이메일 */}
              <div className="info-item">
                <span className="label">Email</span>
                <div className="value-box">
                  <a href="mailto:mindooworld@naver.com" className="text">mindooworld@naver.com</a>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy('mindooworld@naver.com')}
                  >
                    복사
                  </button>
                </div>
              </div>

              {/* 전화번호 - 문자, 전화, 복사 버튼 나란히 배치 */}
              <div className="info-item">
                <span className="label">Phone</span>
                <div className="value-box">
                  <a href="tel:010-4321-7237" className="text">010-4321-7237</a>
                  <div className="btn-group" style={{ display: 'flex', gap: '4px' }}>
                    <a href="tel:010-4321-7237" className="copy-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>전화</a>
                    <a href="sms:010-4321-7237" className="copy-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>문자</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn" onClick={() => setIsModalOpen(false)}>확인</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;