import React, { useState, useEffect } from 'react';

import SectionTitle from '@/components/common/SectionTitle';
import ProfileImg from '@/assets/images/profile-img.png';

const Profile = () => {
  const infoList = [
    { label: 'Age', value: '1991년생' },
    { label: 'Phone', value: '010.4321.7237' },
    { label: 'Email', value: 'mindooworld@naver.com' },
  ];

  return (
    <section className="profile_wrap layout">
      {/* 타이틀 컴포넌트 */}
      <SectionTitle title="Profile" />

      <div className="profile_contents">
        <div className="box-cont">

          <div className="cont">
            {/* ★ 수정 2: class -> className */}
            <div className="profile-cont">

              {/* 왼쪽: 프로필 영역 */}
              <div className="left_box">
                <div className="img_area">
                  <img src={ProfileImg} alt="프로필" />
                </div>
                <div className="info_text">
                  <h3>신민주</h3>
                  <div className="badges">
                    <span>Web Publisher</span>
                    <span>UI Developer</span>
                  </div>
                </div>
              </div>

              {/* 가운데: 정보 리스트 */}
              <div className="center_box">
                <dl>
                  {infoList.map((item, index) => (
                    <div className="row" key={index}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;