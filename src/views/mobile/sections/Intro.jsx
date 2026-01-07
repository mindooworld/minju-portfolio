// src/views/pc/sections/Intro.jsx
import React, { useState, useEffect } from 'react';
import githubIcon from '@/assets/images/git-icon.svg';
import ArrowIcon from '@/assets/images/arrow.svg';

const Intro = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const badges = ['Vue.js', 'React', 'SCSS', 'Figma', 'Git', 'Photoshop'];

  const handleGithub = () => {
    window.open('https://github.com/mindooworld', '_blank');
  };

  // ★ 스크롤 감지 로직 추가
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 142) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className="intro_wrap">
      <div className="intro-cont">
        <div className="intro_inner">
          <div className="text_box">
            <h1 className="main_title">
              Creative Design<br />Publisher
            </h1>
          </div>

          <div className="badge_box">
            {badges.map((text, index) => (
              <span key={index} className="badge">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* git 버튼 */}
        <div className={`git-nav-wrapper ${isScrolled ? 'fixed-nav' : ''}`}>
          <div className="nav-inner">
            <button className="git_btn" onClick={handleGithub} type="button">
              <span className="btn_icon">
                <img src={githubIcon} alt="깃허브" className="git-icon" />
              </span>
              <span className="btn_text">GitHub</span>
              <img src={ArrowIcon} alt="화살표아이콘" className="arrow-icon" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;