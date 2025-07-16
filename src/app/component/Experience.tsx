'use client';
import { ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import Link from "next/link";
import Head from 'next/head';

// Define Work Experience Schema Type



function ReadMoreText({ text, maxLength = 150 }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="read-more-btn"
        style={{
          background: 'none',
          border: 'none',
          color: '#4299e1',
          cursor: 'pointer',
          fontWeight: '500',
          marginLeft: '8px',
          padding: '0',
          fontSize: 'inherit',
          textDecoration: 'none',
          transition: 'color 0.2s ease'
        }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </span>
  );
}

export default function Experience({ educationExperience, workExperience }: any) {

  return (
    <>


      <div className="services-section">
        <div className="container">
          <div className="section-header mt-5">
            <h1 className="section-title">Experience & Education</h1>
            <p className="section-subtitle">
              My professional journey and academic background that shaped my expertise in technology and innovation.
            </p>
          </div>

          <div className="experience-grid">
            {/* Work Experience */}
            <div className="experience-column">
              <div className="column-header">
                <div className="column-icon">💼</div>
                <h2 className="column-title">Work Experience</h2>
              </div>
              <div className="timeline-container">
                <div className="timeline-line"></div>
                {workExperience.map((exp: any, idx: any) => (
                  <div className="experience-item" key={idx}>
                    <div className="experience-header">
                      <div className="experience-info">
                        <h4 className="experience-title">{exp.title}</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', marginTop: '20px' }}>
                          <img src={exp?.logo} alt={`${exp.company} logo`} style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '8px', backgroundColor: '#fff' }} />
                          <div className="experience-company" style={{ fontWeight: 600 }}>
                            {exp.company}
                          </div>
                          <Link className='mb-3' target="_blank" href={exp.link} > <ExternalLink /></Link>
                        </div>
                      </div>
                      <div className="experience-period">{exp.period}</div>
                    </div>
                    <p className="experience-description">
                      <ReadMoreText text={exp.description} maxLength={150} />
                    </p>
                    <div className="experience-location">{exp.location}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="experience-column">
              <div className="column-header">
                <div className="column-icon">🎓</div>
                <h2 className="column-title">Education</h2>
              </div>
              <div className="timeline-container">
                <div className="timeline-line"></div>
                {educationExperience.map((edu: any, idx: any) => (
                  <div className="experience-item" key={idx}>
                    <div className="experience-header">
                      <div className="experience-info">
                        <h4 className="experience-title">{edu.title}</h4>
                        <div className="experience-company">{edu.company}</div>
                      </div>
                      <div className="experience-period">{edu.period}</div>
                    </div>
                    <p className="experience-description">
                      <ReadMoreText text={edu.description} maxLength={150} />
                    </p>
                    <div className="experience-location">{edu.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
