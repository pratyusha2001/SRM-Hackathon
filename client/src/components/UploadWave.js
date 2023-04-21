import React from 'react';
import "./comp.css"

const Wave = () => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="2.67%" stop-color="#CFFFE7" />
      <stop offset="101.34%" stop-color="#F9F8F4" />
    </linearGradient>
  </defs>
  <path fill="url(#gradient)" d="M0,96L60,128C120,160,240,224,360,250.7C480,277,600,267,720,229.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>

  );
}

export default Wave;
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#F0FFF8" d="M0,96L60,128C120,160,240,224,360,250.7C480,277,600,267,720,229.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
  </svg> */}