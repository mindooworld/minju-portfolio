import React, { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import ArrowIcon from '@/assets/images/arrow-2.svg'; // 화살표 아이콘 경로 확인!

const Faq = () => {
  // 현재 활성화된(열린) 질문의 ID를 저장 (초기값: null - 다 닫힘)
  const [activeId, setActiveId] = useState(null);

  // 토글 함수: 이미 열린 걸 누르면 닫고(null), 아니면 해당 ID를 켬
  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  // FAQ 데이터 (나중에 내용만 수정하시면 됩니다)
  const faqList = [
    {
      id: 1,
      question: "작업 소요 기간은 얼마나 걸리나요?",
      answer: "프로젝트 규모에 따라 다르지만, 일반적인 랜딩 페이지는 3~5일, 반응형 웹사이트는 2주 정도 소요됩니다. 정확한 일정은 기획안 검토 후 안내해 드립니다."
    },
    {
      id: 2,
      question: "유지보수도 가능한가요?",
      answer: "네, 가능합니다. 프로젝트 완료 후 1개월간 간단한 텍스트/이미지 수정은 무상으로 지원해 드리며, 이후에는 유지보수 계약을 통해 지속적인 관리가 가능합니다."
    },
    {
      id: 3,
      question: "디자인 원본 파일(PSD/Figma)이 필요한가요?",
      answer: "네, 디자인 시안이 확정된 상태에서 퍼블리싱을 진행합니다. Figma, Zeplin, XD 등 디자인 툴 링크를 공유해 주시면 작업이 훨씬 수월합니다."
    },
    {
      id: 4,
      question: "모바일 반응형 작업도 포함되나요?",
      answer: "물론입니다. PC, 태블릿, 모바일 등 다양한 디바이스 해상도에 최적화된 반응형 웹 퍼블리싱을 기본 원칙으로 작업합니다."
    },
  ];

  return (
    <section className="faq_wrap layout">
      {/* 타이틀 */}
      <SectionTitle title="FAQ" />

      <div className="faq-cont">
        {faqList.map((item) => (
          <div 
            key={item.id}
            // activeId와 내 id가 같으면 'active' 클래스 추가
            className={`accordion_panel ${activeId === item.id ? 'active' : ''}`}
          >
            {/* 헤더: 질문 + 화살표 */}
            <div className="accordion_header" onClick={() => toggleFaq(item.id)}>
              <div className="header-inner">
                {/* 질문 텍스트 */}
                <h4>Q. {item.question}</h4>
                
                {/* 화살표 아이콘 */}
                <span className="arrow_icon">
                  <img src={ArrowIcon} alt="토글 버튼" />
                </span>
              </div>
            </div>

            {/* 바디: 답변 (Grid 애니메이션 적용 대상) */}
            <div className="accordion_body">
              <div className="body_inner">
                <p>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;