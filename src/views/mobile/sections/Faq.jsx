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
      question: "디자인과 퍼블리싱, 정말 둘 다 전문적으로 가능한가요?",
      answer: "네, 기획부터 구현까지 'One-Stop'으로 가능합니다. 단순히 흉내만 내는 것이 아닙니다. Figma를 활용한 체계적인 UI 설계부터 Vue/React 기반의 컴포넌트 개발까지 주도적으로 수행합니다. 디자이너와 개발자 사이의 커뮤니케이션 비용을 획기적으로 줄이고, 의도한 디자인을 100% 코드로 구현해냅니다."
    },
    {
      id: 2,
      question: " 작업 결과물의 유지보수와 인수인계는 용이한가요?",
      answer: " '강사 출신'다운 꼼꼼한 가이드와 주석을 약속합니다. 코드는 짜는 것만큼 관리하는 것도 중요합니다. IT 강사 경력을 살려, 다른 개발자가 보더라도 즉시 이해할 수 있는 직관적인 코드 네이밍과 주석을 확실히 적용해놓습니다."
    },
    {
      id: 3,
      question: "대규모 프로젝트나 엔터프라이즈 환경 경험이 있나요?",
      answer: "네, 대기업 및 공공기관 프로젝트 경험이 풍부합니다. SI 및 대규모 구축 프로젝트를 통해 웹 표준, 웹 접근성(WA) 준수는 물론 까다로운 보안 가이드라인과 크로스 브라우징 이슈를 해결한 경험이 많습니다. 복잡한 데이터 그리드 처리나 엄격한 기업 시스템 환경에도 빠르게 적응합니다."
    },
    {
      id: 4,
      question: "기획자, 백엔드 개발자와의 협업 방식이 궁금합니다.",
      answer: "상대방의 언어로 소통하는 '커뮤니케이터'입니다. 기획자에게는 기술적 제약 사항을 알기 쉽게 설명하여 대안을 제시하고, 개발자에게는 API 연동을 고려한 효율적인 마크업 구조를 제안합니다. 각 직군의 고충을 이해하는 유연한 소통으로 프로젝트의 윤활유 역할을 수행합니다."
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
                <h4><span>Q.</span> {item.question}</h4>

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