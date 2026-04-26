import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Vision<span>AI</span></Link>
          <p className="footer__tagline">
            AI-Powered Assistive System for Visually Impaired Users with Context-Aware Guidance
          </p>
          <p className="footer__inst">
            Sri Lanka Institute of Information Technology
          </p>
        </div>
        <div className="footer__nav">
          <div className="footer__col">
            <h4>Navigation</h4>
            {[['/','Home'],[ '/domain','Domain'],['/milestones','Milestones']].map(([p,l])=>
              <Link key={p} to={p}>{l||'Home'}</Link>
            )}
          </div>
          <div className="footer__col">
            <h4>Resources</h4>
            {[['/documents','Documents'],['/slides','Slides'],['/about','About Us'],['/contact','Contact']].map(([p,l])=>
              <Link key={p} to={p}>{l}</Link>
            )}
          </div>

        </div>
      </div>

    </footer>
  );
}
