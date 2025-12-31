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
    category: "PC",
    desc: "글로벌 반응형 웹사이트 구축 및 접근성 개선",
    link: "https://www.samsung.com",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        // ★ [수정] 뱃지+텍스트 2세트 고정
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 2. 현대자동차
  {
    image: PortfolioImg2,
    title: "Hyundai Motors",
    category: "PC",
    desc: "차세대 인포테인먼트 시스템 GUI 가이드",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tools",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 3. 카카오뱅크
  {
    image: PortfolioImg3,
    title: "APT.Tech",
    category: "PC",
    desc: "야놀자 신규사업 페이지 UI/UX 작업 및 퍼블리싱",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["HTML/CSS", "java script", "jquery", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 4. 네이버 웹툰
  {
    image: PortfolioImg4,
    title: "Naver Webtoon",
    category: "PC",
    desc: "글로벌 서비스 플랫폼 프로토타입",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 5. 쿠팡 이츠
  {
    image: PortfolioImg5,
    title: "Coupang Eats",
    category: "PC",
    desc: "파트너스 어드민 대시보드 리뉴얼",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 6. 넷플릭스 클론
  {
    image: PortfolioImg6,
    title: "Netflix Clone",
    category: "PC",
    desc: "OTT 서비스 영화 탐색 및 재생 기능",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 7. 스타벅스 오더
  {
    image: PortfolioImg7,
    title: "Starbucks Order",
    category: "PC",
    desc: "사이렌 오더 웹 접근성 및 성능 최적화",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 8. 테슬라
  {
    image: PortfolioImg8,
    title: "Tesla Motors",
    category: "PC",
    desc: "브랜드 프로모션 마이크로 사이트",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 9. 에어비앤비
  {
    image: PortfolioImg9,
    title: "Airbnb Redesign",
    category: "PC",
    desc: "숙소 예약 시스템 UI/UX 개선 제안",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  },
  // 10. 애플 비전 프로
  {
    image: PortfolioImg10,
    title: "Apple Vision Pro",
    category: "PC",
    desc: "3D 모델링을 활용한 제품 랜딩 페이지",
    link: "#",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publisng", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Vue.js", "React", "java script", "jquery", "SCSS", "HTML/CSS", "photoshop", "photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 UI 프로토타이핑 및 Design-to-Code 원스톱 구현",
          "Pixel Perfect 스타일링 및 인터랙션 구현",
          "Swiper.js 등 라이브러리를 프로젝트 디자인가이드에 맞춰 커스터마이징"
        ]
      }
    ]
  }
];