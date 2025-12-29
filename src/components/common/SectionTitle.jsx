import React from 'react';

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="section-title">
      <h3>{title}</h3>
      {desc && <p>{desc}</p>} {/* 설명은 있을 수도 있고 없을 수도 있음 */}
    </div>
  );
};

export default SectionTitle;