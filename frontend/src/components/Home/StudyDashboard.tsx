'use client';
import * as React from 'react';
import StatsCard from './StatsCard';
import GoalTracker from './GoalTracker';
import StudyIdeasSection from './StudyIdeasSection';

function StudyDashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-container">
        <StatsCard daysRead={100} />
        <GoalTracker />
        <StudyIdeasSection />
      </div>
      <style jsx>{`
        .dashboard {
          margin-left: auto;
          margin-right: auto;
          max-width: 480px;
          width: 100%;
          padding-left: 1px;
          padding-right: 1px;
        }
        .dashboard-container {
          display: flex;
          padding-bottom: 20px;
          flex-direction: column;
          align-items: center;
          justify-content: start;
        }
      `}</style>
    </section>
  );
}

export default StudyDashboard;
