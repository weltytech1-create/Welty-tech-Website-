'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo-link" onClick={closeMenu}>
          <div className="logo-symbol-wrap">
            <Image
              src="/images/welty-logo.jpg"
              alt="Welty Tech Icon"
              width={44}
              height={44}
              priority
            />
          </div>
          <div className="brand-text">
            <div className="brand-title">
              <span className="welty">Welty</span>
              <span className="tech">Tech</span>
            </div>
            <span className="brand-tagline">SaaS • Dashboards • AI</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav>
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#simulator" className="nav-link" onClick={closeMenu}>
                AI Workflows
              </a>
            </li>
            <li>
              <a href="#dashboard" className="nav-link" onClick={closeMenu}>
                Dashboards
              </a>
            </li>
            <li>
              <a href="#calculator" className="nav-link" onClick={closeMenu}>
                ROI Calc
              </a>
            </li>
            <li>
              <a href="#case-studies" className="nav-link" onClick={closeMenu}>
                Impact
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="nav-cta-wrap">
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}>
            <span>Book Consultation</span>
          </a>

          <button
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
