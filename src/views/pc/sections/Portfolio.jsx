import React, { useRef, useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import PcDetail from '@/views/pc/PcDetail';

// Swiper 관련 import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper 기본 CSS
import 'swiper/css';
// import 'swiper/css/navigation'; // 모듈 CSS는 필요시 import
import { projectData } from '@/data/projectData';

const Portfolio = () => {
  const swiperRef = useRef(null);
  // modal
  const [selectedProject, setSelectedProject] = useState(null);

  const doubledData = [...projectData, ...projectData];

  const openModal = (item) => {
    setSelectedProject(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const portfolioData = doubledData.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return (
    <section className="portfolio_wrap">
      {/* 타이틀 컴포넌트 */}
      <SectionTitle
        title="Portfolio"
        showNav={true}
        // ★ Swiper 인스턴스를 통해 앞/뒤로 이동 함수 연결
        onPrevClick={() => swiperRef.current?.slidePrev()}
        onNextClick={() => swiperRef.current?.slideNext()}
      />

      <div className="portfolio-cont">
        <Swiper
          // --- Swiper 설정 ---
          modules={[Navigation]} // 사용할 모듈 등록
          spaceBetween={0} // 슬라이드 사이 간격 (기본)
          slidesPerView={'auto'}
          centeredSlides={true} // ★ 가운데 정렬
          loop={true} // 무한 반복
          // autoplay={{ // (선택사항) 자동 재생
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          initialSlide={2}
          loopedSlides={8}
          loopAdditionalSlides={5}
          speed={500} // 슬라이드 전환 속도
          // Swiper가 초기화될 때 인스턴스를 ref에 저장
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          // 반응형 브레이크포인트
          // breakpoints={{
          //   // 1024px 이상 (PC 버전)
          //   1024: {
          //     spaceBetween: 24, // 간격 넓힘
          //   },
          //   // 1440px 이상 (대형화면)
          //   1440: {
          //     spaceBetween: 24,
          //   }
          // }}
          className="portfolio-swiper"
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id} className="port-slide-item">
              <div className="inner-box">
                {/* 이미지 영역 */}
                <div className="img-box">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* 호버 시 나타나는 오버레이 영역 */}
                <div className="hover-overlay">
                  <div className="text-wrap">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <button
                      className="view-btn"
                      onClick={() => openModal(item)}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* modal */}
      <PcDetail 
        isOpen={!!selectedProject} 
        onClose={closeModal} 
        data={selectedProject} 
      />
    </section>
  );
};

export default Portfolio;