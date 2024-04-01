import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
      <nav className="nav">
        <ul>
            <li><Link href="#Home">Home</Link></li>
            <li><Link href="#About">About Us</Link></li>
            <li><Link href="#Services">Services</Link></li>
            <li><Link href="#Contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };

  export default NavBar;
