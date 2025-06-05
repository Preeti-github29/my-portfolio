import React from 'react';

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/Projects" style={{ marginRight: '10px' }}>Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
