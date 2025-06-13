import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const personalProjects = [
    {
      title: "Fault Tolerant System in Mobile Robots",
      tech: "Python, Matplotlib",
      url: "https://github.com/Preeti-github29/Fault-Tolerant-System-in-Mobile-Robots"
    },
    {
      title: "Traceroute with Graph Output",
      tech: "Python3, JSON",
      url: "https://github.com/Preeti-github29/Traceroute_with_graph_output"
    },
    {
      title: "HTTP Downloader",
      tech: "Python3, JSON",
      url: "https://github.com/Preeti-github29/Http%20downloader"
    },
    {
      title: "DNS Forwarder",
      tech: "Python",
      url: "https://github.com/Preeti-github29/DNS_forwarder"
    },
    {
      title: "Book Recommender System",
      tech: "Python, Pandas, Matplotlib, Scikit-learn, Numpy",
      url: "https://github.com/Preeti-github29/Book-Recommender-system"
    }
  ];

  const professionalExperience = [
    {
      company: "Bluspire Technologies, Software Developer",
      duration: "Oct 2024 – Present",
      points: [
        "Developed Spring Boot microservices, reducing response time by 25%",
        "Created TypeScript-based React components for a healthcare platform",
        "Designed MySQL/MSSQL schemas and interactive Tableau dashboards"
      ]
    },
    {
      company: "University of Georgia, Graduate Assistant",
      duration: "Aug 2022 – May 2024",
      points: [
        "Developed course material and performed usability evaluations",
        "Built COVID forecasting models and supported students in instruction hours"
      ]
    },
    {
      company: "Mphasis, Associate Software Engineer",
      duration: "Mar 2020 – Dec 2021",
      points: [
        "Delivered ETL solutions for POS systems and automated reporting workflows",
        "Upgraded handheld devices and executed SAP HANA migration plans"
      ]
    },
    {
      company: "Mphasis, Technical Support",
      duration: "Feb 2019 – Feb 2020",
      points: [
        "Managed ServiceNow incidents and supported SQL/debugging tasks",
        "Created dashboards and SLA tracking reports"
      ]
    }
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-container">
      <div className="projects-left">
        <p>PROJECTS</p>
      </div>

      <div className="projects-right">
        <h2>Professional Experience</h2>
        <div className="experience-section">
          {professionalExperience.map((job, index) => (
            <div key={index} className="experience-entry">
              <h3 className="clickable" onClick={() => toggleExpand(index)}>
                {job.company} <span className="duration">({job.duration})</span>
              </h3>
              {expandedIndex === index && (
                <ul>
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: "40px" }}>Personal Projects</h2>
        {personalProjects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Tech:</strong> {project.tech}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}
