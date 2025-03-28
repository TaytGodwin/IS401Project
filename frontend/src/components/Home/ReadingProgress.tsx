import React from 'react';

interface ReadingProgressProps {
  days: number;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ days }) => {
  return (
    <section className="reading-progress">
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="book-icon"
      >
        <path
          d="M20.5 11.6667C20.5 9.89856 19.7977 8.20286 18.5474 6.95262C17.2972 5.70238 15.6015 5 13.8334 5H3.83337V30H15.5C16.8261 30 18.0979 30.5268 19.0356 31.4645C19.9733 32.4021 20.5 33.6739 20.5 35M20.5 11.6667V35M20.5 11.6667C20.5 9.89856 21.2024 8.20286 22.4527 6.95262C23.7029 5.70238 25.3986 5 27.1667 5H37.1667V30H25.5C24.174 30 22.9022 30.5268 21.9645 31.4645C21.0268 32.4021 20.5 33.6739 20.5 35"
          stroke="#255C99"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="days-count">{days}</p>
      <p className="days-label">Days Read</p>
      <style jsx>{`
        .reading-progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .days-count {
          font-size: 24px;
          font-weight: 700;
          color: #255c99;
          margin: 0;
        }
        .days-label {
          font-size: 16px;
          font-weight: 700;
          color: #255c99;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default ReadingProgress;
