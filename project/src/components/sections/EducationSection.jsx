import React from 'react';
import './EducationSection.css'; 

const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section__title">Academic Journey</h2>
      
      <div className="education__timeline">
        {/* B.Tech */}
        <div className="education-card">
          <div className="education-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="education-card__content">
            <h3>B.Tech in Information Technology</h3>
            <p className="institution">Hindusthan College of Engineering and Technology, Coimbatore</p>
            <div className="education-card__meta">
              <span className="year">2023 – 2027</span>
              <span className="score">CGPA: 8.22 (up to 5th semester)</span>
            </div>
          </div>
        </div>

        {/* HSC */}
        <div className="education-card">
          <div className="education-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="education-card__content">
            <h3>Higher Secondary Certificate (HSC)</h3>
            <p className="institution">Government Higher Secondary School, Krishnagiri</p>
            <div className="education-card__meta">
              <span className="year">Completed 2023</span>
              <span className="score">Score: 83.5%</span>
            </div>
          </div>
        </div>

        {/* SSLC */}
        <div className="education-card">
          <div className="education-card__icon">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <div className="education-card__content">
            <h3>Secondary School Leaving Certificate (SSLC)</h3>
            <p className="institution">St. Augustine Matriculation Hr. Sec. School, Krishnagiri</p>
            <div className="education-card__meta">
              <span className="year">Completed 2021</span>
              <span className="score">Status: Passed</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;