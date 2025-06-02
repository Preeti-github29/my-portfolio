import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="modern-home">
      <div className="left-section">
        <h4>PREETI KUMARI</h4>
        <p>
          Hi there! I'm Preeti Kumari — a Software Engineer with a Master’s in Computer Science and 4+ years of experience designing efficient systems for enterprise and retail environments.<br />
          Based in Atlanta, GA — actively open to new opportunities and freelance collaborations.
          <br />
          Love to paint my imagination in form of art.
          For more details please refer to other section.
        </p>
      </div>

      <div className="right-section">
        <a href="/projects">WORK</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
      </div>
    </div>
  );
}
