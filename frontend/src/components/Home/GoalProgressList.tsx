import React from 'react';
import GoalProgress from './GoalProgress';

const GoalProgressList: React.FC = () => {
  const goals = [
    { title: 'Goal: Read Daily', progress: 30 },
    { title: 'Goal: Share with the group', progress: 80 },
    { title: 'Goal: Daily Journal Entries', progress: 50 },
  ];

  return (
    <section className="goal-progress-list">
      {goals.map((goal, index) => (
        <GoalProgress key={index} title={goal.title} progress={goal.progress} />
      ))}
      <style jsx>{`
        .goal-progress-list {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 16px;
        }
      `}</style>
    </section>
  );
};

export default GoalProgressList;
