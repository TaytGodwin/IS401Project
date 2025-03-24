'use client';
import React from 'react';
import ReadingProgress from './ReadingProgress';
import GoalProgressList from './GoalProgressList';
import StudyIdeas from './StudyIdeas';

const ScriptureTracker: React.FC = () => {
  return (
    <main className="tracker-container">
        <section className="tracker-content">
        <ReadingProgress days={100} />
        <GoalProgressList />
        <h2 className="study-ideas-title">Study Ideas</h2>
        <StudyIdeas />
      </section>
      <style jsx>{`
        .tracker-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          background-color: #fff;
          font-family: Roboto, sans-serif;
        }
        .tracker-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px;
          max-width: 600px;
          width: 100%;
          gap: 24px;
        }
        .study-ideas-title {
          font-size: 24px;
          font-weight: 700;
          color: #255c99;
          margin-top: 16px;
          align-self: flex-start;
        }
      `}</style>
    </main>
  );
};

export default ScriptureTracker;
