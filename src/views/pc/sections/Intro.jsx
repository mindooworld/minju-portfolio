// src/views/pc/sections/Intro.jsx
import React from 'react';
import githubIcon from '@/assets/images/git-icon.svg';
import ArrowIcon from '@/assets/images/arrow.svg';

const Intro = () => {
  // 뱃지에 들어갈 텍스트 (5개)
  const badges = ['Vue.js', 'React', 'SCSS', 'Figma', 'Git', 'Photoshop'];
  const handleGithub = () => {
    window.open('https://github.com/mindooworld', '_blank');
  };

  return (
    <section className="intro_wrap">
      <div class="intro-cont">
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

        <button className="git_btn" onClick={handleGithub} type="button">
          <span className="btn_icon">
            <img src={githubIcon} alt="깃허브" className="git-icon" />
          </span>
          <span className="btn_text">GitHub</span>
          <img src={ArrowIcon} alt="화살표아이콘" className="arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default Intro;