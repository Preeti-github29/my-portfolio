import React from 'react';
import './Projects.css';

export default function Projects() {
  const experiences = [
    {
      company: 'Bluspire Technologies',
      title: 'Software Developer',
      duration: 'Oct 2024 - Present',
      bullets: [
        'Developed and maintained microservices using Spring Boot, RESTful APIs, and TypeScript, improving scalability and performance.',
        'Built reusable React components, reducing bugs by 40% and enhancing UI speed.',
        'Optimized MySQL and MSSQL queries, improving database performance by 15%.',
        'Created interactive Tableau dashboards for stakeholders.'
      ],
    },
    {
      company: 'University of Georgia',
      title: 'Graduate Assistant',
      duration: 'Aug 2022 – May 2024',
      bullets: [
        'Taught Theory of Computation; guided students through complex concepts.',
        'Assisted in data collection, ETL processes using AWS Glue, and created visualizations.',
        'Contributed to COVID-19 forecasting and supported accessibility evaluations.'
      ],
    },
    {
      company: 'Mphasis',
      title: 'Associate Software Engineer',
      duration: 'Mar 2020 – Dec 2021',
      bullets: [
        'Built ETL pipelines for POS system data.',
        'Automated reporting workflows, reducing manual work by 75%.',
        'Configured ServiceNow modules and optimized ticket resolution time by 40%.',
        'Led SAP HANA migration planning and handheld upgrade projects.'
      ],
    },
    {
      company: 'Mphasis',
      title: 'Technical Support',
      duration: 'Feb 2019 – Feb 2020',
      bullets: [
        'Resolved CRM and retail platform incidents via ServiceNow.',
        'Debugged SQL queries and created performance dashboards.',
        'Maintained a knowledge base and improved SLA compliance.'
      ],
    },
  ];

  const projects = [
    {
      title: 'Fault Tolerant System in Mobile Robots',
      tech: 'Python, Matplotlib',
      url: 'https://github.com/Preeti-github29/Fault-Tolerant-System-in-Mobile-Robots'
    },
    {
      title: 'Traceroute with Graph Output',
      tech: 'Python3, JSON',
      url: 'https://github.com/Preeti-github29/Traceroute_with_graph_output'
    },
    {
      title: 'HTTP Downloader',
      tech: 'Python3, JSON',
      url: 'https://github.com/Preeti-github29/Http%20downloader'
    },
    {
      title: 'DNS Forwarder',
      tech: 'Python',
      url: 'https://github.com/Preeti-github29/DNS_forwarder'
    },
    {
      title: 'Book Recommender System',
      tech: 'Python, Pandas, Scikit-learn, Matplotlib, Numpy',
      url: 'https://github.com/Preeti-github29/Book-Recommender-system'
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-left">
        <h4>PREETI KUMARI</h4>
        <p>WORK</p>
      </div>

      <div className="projects-right">
        <h2>Professional Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-entry">
            <h3>{exp.company} - {exp.title}
              <span className="duration">{exp.duration}</span>
            </h3>
            <ul>
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Projects</h2>
        {projects.map((proj, idx) => (
          <div key={idx} className="project">
            <h3>{proj.title}</h3>
            <p><strong>Tech Stack:</strong> {proj.tech}</p>
            <a href={proj.url} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}
