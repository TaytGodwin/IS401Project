import React from 'react';

interface GoalProgressProps {
  title: string;
  progress: number;
}

const GoalProgress: React.FC<GoalProgressProps> = ({ title, progress }) => {
  return (
    <div className="goal-progress">
      <h3 className="goal-title">{title}</h3>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <style jsx>{`
        .goal-progress {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .goal-title {
          font-size: 16px;
          font-weight: 700;
          color: #255c99;
          margin: 0;
        }
        .progress-bar-container {
          width: 100%;
          height: 12px;
          background-color: #dfdfdf;
          border-radius: 8px;
          overflow: hidden;
        }
        .progress-bar {
          height: 100%;
          background-color: #255c99;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default GoalProgress;
