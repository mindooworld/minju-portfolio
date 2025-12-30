// src/data/projectData.js

import PortfolioImg1 from '@/assets/images/portfolio/portfolio01.jpg';
import PortfolioImg2 from '@/assets/images/portfolio/portfolio02.jpg';
import PortfolioImg3 from '@/assets/images/portfolio/portfolio03.jpg';
import PortfolioImg4 from '@/assets/images/portfolio/portfolio04.jpg';
import PortfolioImg5 from '@/assets/images/portfolio/portfolio05.jpg';
import PortfolioImg6 from '@/assets/images/portfolio/portfolio06.jpg';
import PortfolioImg7 from '@/assets/images/portfolio/portfolio07.jpg';
import PortfolioImg8 from '@/assets/images/portfolio/portfolio08.jpg';
import PortfolioImg9 from '@/assets/images/portfolio/portfolio09.jpg';
import PortfolioImg10 from '@/assets/images/portfolio/portfolio10.jpg';

export const projectData = [
  // 1. 삼성전자
  {
    image: PortfolioImg1,
    title: "Samsung Electronics",
    desc: "글로벌 반응형 웹사이트 구축 및 접근성 개선",
    link: "https://www.samsung.com",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        // ★ [수정] 뱃지+텍스트 2세트 고정
        contents: [
          { badge: "Project Type", text: "삼성전자 글로벌 웹사이트 대규모 리뉴얼 및 운영" },
          { badge: "Key Goal", text: "전 세계 사용자 대상 웹 접근성 인증 마크(WA) 획득" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Publishing 100%", "Maintenance", "QA Test"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["HTML5", "SCSS", "jQuery", "Gulp"]
      }
    ]
  },
  // 2. 현대자동차
  {
    image: PortfolioImg2,
    title: "Hyundai Motors",
    desc: "차세대 인포테인먼트 시스템 GUI 가이드",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Platform", text: "차량용 인포테인먼트(IVI) 시스템 GUI 디자인 가이드" },
          { badge: "Feature", text: "운전자 경험 최적화를 위한 컴포넌트 시스템 구축" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Design 80%", "Publishing 20%", "Guide Doc"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tools",
        list: ["Figma", "React", "Storybook"]
      }
    ]
  },
  // 3. 카카오뱅크
  {
    image: PortfolioImg3,
    title: "Kakao Bank",
    desc: "모바일 뱅킹 앱 이벤트 페이지 인터랙션",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Event", text: "26주 적금 챌린지 프로모션 페이지 제작" },
          { badge: "Effect", text: "Lottie를 활용한 캐릭터 애니메이션 및 인터랙션 구현" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Publishing 100%", "Animation 100%"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["Vue.js", "Lottie", "GSAP", "Scss"]
      }
    ]
  },
  // 4. 네이버 웹툰
  {
    image: PortfolioImg4,
    title: "Naver Webtoon",
    desc: "글로벌 서비스 플랫폼 프로토타입",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Target", text: "북미/유럽 시장 타겟 웹툰 플랫폼 초기 프로토타이핑" },
          { badge: "Role", text: "빠른 사용자 테스트(UT)를 위한 MVP 프론트엔드 개발" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Frontend 70%", "Prototyping"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["React", "Next.js", "Typescript"]
      }
    ]
  },
  // 5. 쿠팡 이츠
  {
    image: PortfolioImg5,
    title: "Coupang Eats",
    desc: "파트너스 어드민 대시보드 리뉴얼",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Service", text: "입점 사장님 전용 매출/주문 관리 어드민 대시보드" },
          { badge: "Focus", text: "복잡한 매출 데이터를 시각화(Chart)하여 가독성 개선" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Publishing 90%", "Data Viz"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["React", "Chart.js", "Emotion"]
      }
    ]
  },
  // 6. 넷플릭스 클론
  {
    image: PortfolioImg6,
    title: "Netflix Clone",
    desc: "OTT 서비스 영화 탐색 및 재생 기능",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Personal", text: "TMDB API를 활용한 영화 정보 및 예고편 재생 사이트" },
          { badge: "Learning", text: "React Hooks 및 비동기 통신(Axios) 완벽 이해" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Solo Project 100%", "Design", "Dev"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["React", "Axios", "TMDB API", "Netlify"]
      }
    ]
  },
  // 7. 스타벅스 오더
  {
    image: PortfolioImg7,
    title: "Starbucks Order",
    desc: "사이렌 오더 웹 접근성 및 성능 최적화",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Refactoring", text: "기존 사이렌 오더 페이지 로딩 속도 30% 개선" },
          { badge: "A11y", text: "스크린 리더 사용자를 위한 WAI-ARIA 태그 적용" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Optimization 100%", "Publishing 50%"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["HTML", "Sass", "Javascript", "Lighthouse"]
      }
    ]
  },
  // 8. 테슬라
  {
    image: PortfolioImg8,
    title: "Tesla Motors",
    desc: "브랜드 프로모션 마이크로 사이트",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Promotion", text: "신형 모델 출시 기념 패럴랙스 스크롤링 사이트" },
          { badge: "Motion", text: "Framer Motion을 활용한 고퀄리티 등장 애니메이션" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Publishing 100%", "Interaction"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["React", "Framer Motion", "Styled-comp"]
      }
    ]
  },
  // 9. 에어비앤비
  {
    image: PortfolioImg9,
    title: "Airbnb Redesign",
    desc: "숙소 예약 시스템 UI/UX 개선 제안",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Case Study", text: "기존 예약 프로세스의 불편함을 분석 및 리디자인" },
          { badge: "UI/UX", text: "필터링 기능 강화 및 지도 보기 편의성 증대" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Design & Pub 100%", "UX Research"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["React", "Redux", "Google Maps API"]
      }
    ]
  },
  // 10. 애플 비전 프로
  {
    image: PortfolioImg10,
    title: "Apple Vision Pro",
    desc: "3D 모델링을 활용한 제품 랜딩 페이지",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "3D Web", text: "Three.js를 활용한 인터랙티브 3D 제품 뷰어 구현" },
          { badge: "Demo", text: "웹상에서 제품을 360도 회전 및 확대/축소 가능" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Tech Demo 100%", "Modeling"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: ["Three.js", "React Three Fiber", "WebGL"]
      }
    ]
  }
];