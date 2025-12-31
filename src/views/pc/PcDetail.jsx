import React from 'react';
import CloseIcon from '@/assets/images/close-icon.svg';

const PcDetail = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <div className="detail-inner">
          {/* 왼쪽 이미지 영역 */}
          <div className="img-area">
            <img src={data.image} alt={data.title} />
          </div>

          {/* 오른쪽 텍스트 영역 */}
          <div className="text-area">
            <button className="close-btn" onClick={onClose}>
              <img src={CloseIcon} alt="닫기" />
            </button>

            <div className="title">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
            </div>

            <div className="detail-info-wrap">
              {data.details && data.details.map((item) => (
                <div key={item.id} className={`info-item type-${item.type}`}>

                  {/* 섹션 제목 (Overview, Contribution, Tech Stack) */}
                  <h4 className="label">{item.label}</h4>

                  {/* 1. Overview 타입: (contents 배열 사용) */}
                  {item.type === 'overview' && item.contents && (
                    <div className="cont">
                      {item.contents.map((cont, idx) => (
                        <div key={idx} className="overview-row">
                          <span className="badge">{cont.badge}</span>
                          <p className="text">{cont.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 2. Contribution 타입: (badges 배열 사용) */}
                  {item.type === 'contribution' && item.badges && (
                    <div className="cont">
                      {item.badges.map((badgeText, idx) => (
                        <span key={idx} className="badge">{badgeText}</span>
                      ))}
                    </div>
                  )}

                  {/* 3. Tech Stack 타입: (list 배열 사용 - type이 'tech'인지 확인) */}
                  {item.type === 'tech' && item.list && (
                    <ul>
                      {item.list.map((li, idx) => (
                        <li key={idx}><i className="dot"></i>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcDetail;