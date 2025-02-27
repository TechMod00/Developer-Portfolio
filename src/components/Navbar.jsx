import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className = "navbar">
        <h1>Aryan Sharma</h1>
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
          <li><Link to = "/projects">Projects</Link></li>
        </ul>
      </nav>      
    </div>
  )
}
