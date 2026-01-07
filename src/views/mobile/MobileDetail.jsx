import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from '@/assets/images/close-icon.svg';
import ArrowIcon from '@/assets/images/arrow-2.svg'; 

const MobileDetail = ({ isOpen, onClose, onPrev, onNext, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // ★ [추가 1] 닫히는 애니메이션 상태
  const [isClosing, setIsClosing] = useState(false);
  
  const touchStartY = useRef(0);
  const imgTouchRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setIsExpanded(false);
      setIsClosing(false); // 열릴 땐 닫힘 상태 초기화
    }
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  // ★ [수정 1] 닫기 핸들러 (애니메이션 적용)
  const handleClose = () => {
    setIsClosing(true); // 1. 닫히는 애니메이션 시작 (.closing 클래스 추가)
    
    // 2. 0.3초(CSS transition 시간) 기다렸다가 실제로 닫기
    setTimeout(() => {
      onClose();
    }, 500);
  };

  // --- 바텀 시트 핸들러 ---
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const distance = touchStartY.current - touchEndY;

    if (!isExpanded && distance > 50) {
      setIsExpanded(true);
    } else if (isExpanded && distance < -50) {
      setIsExpanded(false);
    } else if (!isExpanded && distance < -50) {
      handleClose(); // 여기서도 수정된 handleClose 호출
    }
  };

  // --- 이미지 스와이프 핸들러 ---
  const handleImgTouchStart = (e) => {
    imgTouchRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleImgTouchEnd = (e) => {
    if (isExpanded) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - imgTouchRef.current.x;
    const deltaY = touchEndY - imgTouchRef.current.y; 

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) onPrev();
        else onNext();
      }
    } else {
      if (deltaY > 50) {
        handleClose(); // 여기서도 수정된 handleClose 호출
      } else if (deltaY < -50) {
         setIsExpanded(true);
      }
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // ★ [수정 2] closing 클래스 조건부 추가
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className="modal-cont" onClick={(e) => e.stopPropagation()}>
         {/* ... (내부 내용은 기존과 100% 동일) ... */}
        <div className="detail-inner">

          <button className="nav-btn prev" onClick={onPrev} aria-label="이전">
            <img src={ArrowIcon} alt="이전" />
          </button>
          
          <button className="nav-btn next" onClick={onNext} aria-label="다음">
            <img src={ArrowIcon} alt="다음" />
          </button>

          <button className="close-btn" onClick={handleClose} aria-label="닫기">
            <img src={CloseIcon} alt="닫기" />
          </button>

          <div 
            className="img-area"
            onTouchStart={handleImgTouchStart}
            onTouchEnd={handleImgTouchEnd}
          >
            <img key={data.image} 
              src={data.image} 
              alt={data.title} />
          </div>

          <div
            className={`text-area ${isExpanded ? 'is-expanded' : ''}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="drag-handle-area" onClick={toggleExpand}>
              <div className="drag-handle-bar"></div>
            </div>

            <div className="title">
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
            </div>

            <div className="detail-info-wrap">
              {data.details && data.details.map((item) => (
                <div key={item.id} className={`info-item type-${item.type}`}>
                  <h4 className="label">{item.label}</h4>

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

                  {item.type === 'contribution' && item.badges && (
                    <div className="cont">
                      {item.badges.map((badgeText, idx) => (
                        <span key={idx} className="badge">{badgeText}</span>
                      ))}
                    </div>
                  )}

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

export default MobileDetail;