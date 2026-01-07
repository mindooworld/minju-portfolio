import React from 'react'; // useState, useEffect는 Swiper에서 알아서 하므로 제거 가능
import SectionTitle from '@/components/common/SectionTitle';

// ★ Swiper 관련 임포트
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // 기본 스타일
import 'swiper/css/autoplay'; // 자동재생 스타일

// 아이콘
import CardIcon01 from '@/assets/images/card1.svg';
import CardIcon02 from '@/assets/images/card2.svg';
import CardIcon03 from '@/assets/images/card3.svg';

const AboutMe = () => {
  const bodyCont1 = [
    {
      id: 1,
      icon: CardIcon01,
      title: "Design-savvy Publisher",
      text: "보기 좋은 디자인을 넘어 작동하는 구조를 만들고, 개발자의 언어로 구현합니다. 디자인 감각과 퍼블리싱 기술을 겸비하여 기획부터 배포까지 매끄러운 연결고리를 만듭니다."
    },
    {
      id: 2,
      icon: CardIcon02,
      title: "Solid Career & Insight",
      text: "대기업 프로젝트의 정교함, 공공기관의 웹 표준 준수, IT 강사의 명쾌한 소통 능력까지. 다양한 현장에서 쌓은 단단한 내공으로 어떤 프로젝트든 유연하게 완수합니다."
    },
    {
      id: 3,
      icon: CardIcon03,
      title: "Deep Dive",
      text: "재능보다 무서운 것은 꾸준함이라 믿습니다. 모르는 것은 알 때까지, 아는 것은 깊어질 때까지 파고듭니다. 성실함이라는 가장 강력한 무기로 기술의 변화 속도를 앞서나가는 노력하는 전문가입니다."
    },
  ];

  return (
    <section className="about_wrap layout">
      <SectionTitle title="About Me" />

      <div className="about_contents">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16} // 카드 사이 간격 (px)
          slidesPerView={1.15} // ★ 핵심! 1장을 보여주고 다음 장 15%를 보여줌
          centeredSlides={false} // 왼쪽 정렬 (true면 가운데 정렬)
          loop={false} // 카드 3장이면 굳이 무한루프 안 돌려도 되지만 필요하면 true
          autoplay={{
            delay: 3000, // 3초마다 넘김
            disableOnInteraction: false, // 터치해도 자동재생 계속 유지
          }}
          breakpoints={{
            // 768px 이상(태블릿/PC)에서는 카드 3개 다 보이게 (선택사항)
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="about-swiper"
        >
          {bodyCont1.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="box-cont">
                <div className="cont">
                  {/* 기존 box-cont 구조를 유지하면서 slide 안에 넣음 */}
                  <div className="card">
                    <span className="icon">
                      <img src={item.icon} alt={`${item.title} 아이콘`} />
                    </span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutMe;