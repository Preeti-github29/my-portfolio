import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <h4>PREETI KUMARI</h4>
        <p>ABOUT</p>
      </div>

      <div className="about-right">
        <p>
          Hi, I’m Preeti Kumari — a Senior Software Engineer with over 4 years of hands-on experience across enterprise IT, retail systems, and automation. I hold a Master’s degree in Computer Science from the University of Georgia and am currently based in Atlanta, GA.
        </p>
        <p>
          Throughout my career, I’ve built robust backend systems using Java and Python, streamlined ITSM workflows using ServiceNow, and created insightful dashboards with Tableau and Power BI. I've worked on high-impact projects involving POS system integration, handheld device upgrades, and automation for daily operations. I’ve also debugged and resolved complex L2/L3 technical issues using tools like Datadog and Bugsnag.
        </p>
        <p>
          What drives me is the challenge of turning inefficiencies into seamless workflows. Whether it’s enhancing in-store operations, optimizing resource planning, or simplifying UI interactions — I thrive on solving problems with practical, data-driven solutions.
        </p>
        <p>
          In my free time, I build side projects like COVID forecasting models and contribute to personal automation tools.
        </p>
        <p>
          Let’s connect and build something impactful together.
        </p>
      </div>
    </div>
  );
}
