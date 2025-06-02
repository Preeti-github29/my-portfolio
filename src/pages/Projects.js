import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
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

  return (
    <div className="projects-container">
      <div className="projects-left">
        <h4>PREETI KUMARI</h4>
        <p>PROJECTS</p>
      </div>

      <div className="projects-right">
        {projects.map((project, index) => (
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
