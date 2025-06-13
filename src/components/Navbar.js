import React from 'react';

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/home" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/projects" style={{ marginRight: '10px' }}>Work</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
