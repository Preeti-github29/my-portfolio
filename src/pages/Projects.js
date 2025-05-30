import React from 'react';

export default function Projects() {
  const projects = [
    { title: "Fault Tolerant System in Mobile Robots", tech: "Python, Matplotlib", url: "https://github.com/Preeti-github29/Fault-Tolerant-System-in-Mobile-Robots" },
    { title: "Traceroute with graph output", tech: "Python3, Json", url: "https://github.com/Preeti-github29/Traceroute_with_graph_output" },
    { title: "HTTP Downloader", tech: "Python3, Json", url: "https://github.com/Preeti-github29/Http downloader" },
    { title: "DNS_forwarder", tech: "Python", url: "https://github.com/Preeti-github29/DNS_forwarder" },
    { title: "Book Recommender system", tech: "Python, Panda,Matplotlib, Scikit-leran, Numpy" , url: "https://github.com/Preeti-github29/Book-Recommender-system" }
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <h3>{p.title}</h3>
            <p>Technologies: {p.tech}</p>
            <a href={p.url} target="_blank">View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
