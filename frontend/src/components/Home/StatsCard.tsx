import * as React from 'react';

interface StatsCardProps {
  daysRead: number;
}

function StatsCard({ daysRead }: StatsCardProps) {
  return (
    <section className="stats-container">
      <article className="stats-card">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca8b7ebd1b307f8a41df4288677f795f1a326b5fbd207caf0ae26127da1902aa?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
          className="stats-icon"
          alt="Calendar icon"
        />
        <div className="stats-content">
          <h2 className="stats-value">{daysRead}</h2>
          <p className="stats-label">Days Read</p>
        </div>
      </article>
      <style jsx>{`
        .stats-container {
          display: flex;
          width: 240px;
          max-width: 100%;
          padding-top: 2px;
          padding-bottom: 2px;
          flex-direction: column;
          align-items: stretch;
          color: #255c99;
          text-align: center;
          justify-content: center;
        }
        .stats-card {
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          min-width: 240px;
          padding: 24px;
          flex-direction: column;
          align-items: stretch;
          justify-content: start;
        }
        .stats-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 40px;
          align-self: center;
        }
        .stats-content {
          margin-top: 24px;
          width: 100%;
        }
        .stats-value {
          width: 100%;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 600;
          white-space: nowrap;
          letter-spacing: -0.48px;
          line-height: 1.2;
          margin: 0;
        }
        .stats-label {
          margin-top: 4px;
          width: 100%;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}

export default StatsCard;
