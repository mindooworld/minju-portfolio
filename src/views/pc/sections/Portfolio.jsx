import React, { useRef, useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import PcDetail from '@/views/pc/PcDetail';

// Swiper 관련 import
import { Swiper, SwiperSlide } from 'swiper/react';
// ★ 수정 1: Virtual 모듈을 여기서 꼭 불러와야 합니다!
import { Navigation, Autoplay, Virtual } from 'swiper/modules';

// Swiper 기본 CSS
import 'swiper/css';
// import 'swiper/css/navigation'; // 모듈 CSS는 필요시 import
import { projectData } from '@/data/projectData';

const Portfolio = () => {
  const swiperRef = useRef(null);
  // modal
  const [selectedProject, setSelectedProject] = useState(null);

  // 데이터 2배 뻥튀기 (루프가 자연스럽게 돌기 위해)
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
    id: index + 1, // 고유 ID 생성
  }));

  return (
    <section className="portfolio_wrap">
      {/* 타이틀 컴포넌트 */}
      <SectionTitle
        title="Portfolio"
        showNav={true}
        onPrevClick={() => swiperRef.current?.slidePrev()}
        onNextClick={() => swiperRef.current?.slideNext()}
      />

      <div className="portfolio-cont">
        <Swiper
          // --- Swiper 설정 ---
          modules={[Navigation, Virtual]} // Virtual 모듈 사용
          virtual={true}             // ★ 핵심: 가상 슬라이드 활성화
          observer={true}            
          observeParents={true}      
          watchSlidesProgress={true}
          spaceBetween={0} 
          slidesPerView={'auto'}
          centeredSlides={true} 
          loop={true} 
          initialSlide={2}
          // loopedSlides={8} // loop 모드일 때 넉넉하게 잡아줌
          // loopAdditionalSlides={5}
          speed={500} 
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="portfolio-swiper"
        >
          {portfolioData.map((item, index) => (
            <SwiperSlide key={item.id} className="port-slide-item" virtualIndex={index}>
              <div className="inner-box">
                {/* 이미지 영역 */}
                <div className="img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* 호버 시 나타나는 오버레이 영역 */}
                <div className="hover-overlay">
                  <div className="text-wrap">
                    <div className="title">
                      <h4>{item.title}</h4>
                      {item.category && <span className="badge">{item.category}</span>}
                    </div>
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