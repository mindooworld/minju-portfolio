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
  {
    image: PortfolioImg1,
    title: "K-eco Waste System",
    category: "PC",
    desc: "한국환경공단 지능형 폐기물 관리 시스템 UI 구축",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publishing", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "HTML", "CSS"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "복잡한 공공 데이터를 시각화하는 대시보드 및 통계 UI 특화 설계",
        ]
      }
    ]
  },
  {
    image: PortfolioImg2,
    title: "Global Air Plan",
    category: "PC",
    desc: "글로벌 비즈니스 확장을 위한 다국어 통합 웹 구축",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "Photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "i18next 라이브러리를 통한 다국어 지원 및 텍스트 가변성 고려 디자인",
          "글로벌 기업 이미지를 구축하기 위한 전문적인 컬러 팔레트 및 레이아웃",
          "해외 네트워크 환경을 고려한 이미지 경량화"
        ]
      }
    ]
  },
  {
    image: PortfolioImg3,
    title: "APT.Tech",
    category: "PC/MO",
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
        badges: ["Figma", "React"],
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
  {
    image: PortfolioImg4,
    title: "Beauty Commerce",
    category: "PC",
    desc: "프리미엄 뷰티 이커머스 플랫폼 구축 및 UX 최적화",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "Figma를 활용한 트렌디한 뷰티 브랜드 아이덴티티 수립 및 UI 설계"
        ]
      }
    ]
  },
  {
    image: PortfolioImg5,
    title: "FingerSales",
    category: "PC/MO",
    desc: "CRM 솔루션 핑거세일즈 웹사이트 신규 리뉴얼",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publishing", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Photoshop", "HTMl", "CSS", "jQuery"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "B2B 타겟에 최적화된 신뢰감 있는 디자인 시스템 구축",
          "복잡한 기능 설명을 위한 인포그래픽 기반의 UI 가시성 확보"
        ]
      }
    ]
  },
  {
    image: PortfolioImg6,
    title: "LG Ensys Webzine",
    category: "PC/MO",
    desc: "LG 엔시스 사내 소통 활성화를 위한 디지털 웹진 구축",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publishing", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "Vue3", "SCSS"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "다양한 콘텐츠 아카이브를 위한 효율적인 그리드 레이아웃 설계",
          "전 기기 완벽 대응을 위한 중단점 기반의 고도화된 반응형 웹 구현",
          "사용자 가독성을 고려한 타이포그래피 및 인터랙티브 요소 적용"
        ]
      }
    ]
  },
  {
    image: PortfolioImg7,
    title: "Architecture Portfolio",
    category: "PC",
    desc: "건축 디자인 기업 브랜드 아이덴티티 및 사이트 구축",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "Photoshop"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "공간감을 살린 미니멀한 디자인 및 고해상도 이미지 최적화 레이아웃"
        ]
      }
    ]
  },
  {
    image: PortfolioImg8,
    title: "KOBACO",
    category: "PC",
    desc: "한국옥외광고센터 공공 정보 접근성 향상 디자인 작업",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publishing", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "HTML", "CSS", "Web Accessibility", "jQuery"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "웹 접근성 지침(KWCAG)을 준수하는 표준 마크업 및 디자인 설계",
          "공공기관 특성에 맞는 명확하고 일관된 정보 구조(IA) 수립",
          "크로스 브라우징 최적화를 통해 다양한 브라우저 환경 지원"
        ]
      }
    ]
  },
  {
    image: PortfolioImg9,
    title: "Yonsei University",
    category: "PC",
    desc: "연세대학교 대학원 공식 웹사이트 통합 구축",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publishing", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "HTML", "CSS", "JavaScript"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "방대한 학사 정보를 체계적으로 관리할 수 있는 계층적 메뉴 구조 설계",
          "기관의 품격을 높이는 고전적이고 전문적인 디자인 무드 조성",
          "모든 모바일 기기에서 정보 확인이 용이한 적응형 UI 구현"
        ]
      }
    ]
  },
  {
    image: PortfolioImg10,
    title: "PrimeWith",
    category: "PC/MO",
    desc: "프라임위드 비즈니스 플랫폼 전면 리뉴얼 구축",
    link: "",
    details: [
      {
        id: 1,
        type: 'overview',
        label: "Overview",
        contents: [
          { badge: "Design", text: "100%" },
          { badge: "Publishing", text: "100%" }
        ]
      },
      {
        id: 2,
        type: 'contribution',
        label: "Contribution",
        badges: ["Figma", "Vue.js", "SCSS", "JavaScript", "Animation"],
      },
      {
        id: 3,
        type: 'tech',
        label: "Tech Stack",
        list: [
          "서비스 확장성을 고려한 디자인 시스템 및 재사용 가능한 컴포넌트 설계",
          "사용자 흐름에 최적화된 UX 라이팅 및 인터페이스 대폭 개선",
          "다양한 스크린 환경에서도 깨지지 않는 벡터 그래픽 기반 스타일링"
        ]
      }
    ]
  }
];