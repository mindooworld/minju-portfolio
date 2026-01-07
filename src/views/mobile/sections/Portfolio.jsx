import React, { useRef, useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import MobileDetail from '@/views/mobile/MobileDetail';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { projectData } from '@/data/projectData';

const Portfolio = () => {
  const swiperRef = useRef(null);

  // ✅ 1. state 선언
  const [selectedIndex, setSelectedIndex] = useState(null);

  // ✅ 2. 데이터 가공 (state보다 위 X, 사용 전에 선언)
  const doubledData = [...projectData, ...projectData];
  const portfolioData = doubledData.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  // ✅ 3. derived data
  const selectedProject =
    selectedIndex !== null ? portfolioData[selectedIndex] : null;

  // modal handlers
  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goPrevProject = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;

      const prevIndex =
        (prev - 1 + portfolioData.length) % portfolioData.length;

      swiperRef.current?.slidePrev();
      return prevIndex;
    });
  };

  const goNextProject = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return prev;

      const nextIndex = (prev + 1) % portfolioData.length;
      swiperRef.current?.slideNext();
      return nextIndex;
    });
  };

  return (
    <section className="portfolio_wrap">
      <SectionTitle
        title="Portfolio"
      />

      <div className="portfolio-cont">
        <Swiper
          modules={[Navigation]}
          slidesPerView={'auto'}
          observer={true}
          observeParents={true}
          watchSlidesProgress={true}
          speed={500}
          spaceBetween={0}
          centeredSlides={true}
          loop={false}
          initialSlide={0}
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          className="portfolio-swiper"
        >
          {portfolioData.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="port-slide-item"
            >
              <div className="inner-box">
                <div className="img-box">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="hover-overlay">
                  <div className="text-wrap">
                    <div className="title">
                      <h4>{item.title}</h4>
                      {item.category && (
                        <span className="badge">{item.category}</span>
                      )}
                    </div>
                    <p>{item.desc}</p>
                    <button
                      className="view-btn"
                      onClick={() => openModal(index)}
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
      <MobileDetail
        isOpen={selectedIndex !== null}
        data={selectedProject}
        onClose={closeModal}
        onPrev={goPrevProject}
        onNext={goNextProject}
      />
    </section>
  );
};

export default Portfolio;
