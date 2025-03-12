'use client';
import * as React from 'react';

function GoalTracker() {
  return (
    <section className="goals-container">
      <h3 className="goal-title">Goal: Read Daily</h3>
      <div className="progress-indicator">
        <div className="active-indicator">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6104772633df28b63ed2d65abdcacd114dce35faaa36d2f3012f164303c2165?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="progress-start"
            alt="Progress start"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1300a285083c905431d19b7dacb8bd883fe766f8039514f68d282bcdd792494?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="progress-fill"
            alt="Progress fill"
          />
        </div>
        <div className="track-container">
          <div className="track">
            <div className="track-line" />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0bf438de1bd2b4294260b60224635638b269976ea2ad65b096642a7c8587ee0?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="track-end"
            alt="Track end"
          />
        </div>
      </div>

      <h3 className="goal-title goal-share">Goal: Share with the group</h3>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72349039d663dcb35f59e7a77ef803c2225cdf896541514147338006c44c79c1?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
        className="completed-indicator"
        alt="Completed indicator"
      />

      <h3 className="goal-title goal-journal">Goal: Daily Journal Entries</h3>
      <div className="progress-indicator">
        <div className="active-indicator">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6104772633df28b63ed2d65abdcacd114dce35faaa36d2f3012f164303c2165?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="progress-start"
            alt="Progress start"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9823952fd7bcb48026d2ddfe2fbb3c0e4c00a20cd3c042959c098fb826064f79?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="progress-fill"
            alt="Progress middle"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f6725f358a2130a14a96203a9620b3d6614402d38b0e0179c03d07da2d51bda?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="progress-end"
            alt="Progress end"
          />
        </div>
        <div className="track-container">
          <div className="track">
            <div className="track-line" />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e96607375646bfd3e44db3a39640d2765800258924aee552df60ba2e30a0fe?placeholderIfAbsent=true&apiKey=f1e54f3984504394aeec2e2823998c52"
            className="track-end"
            alt="Track end"
          />
        </div>
      </div>

      <style react-jsx>{`
        .goals-container {
          align-self: stretch;
          display: flex;
          margin-top: 15px;
          width: 100%;
          padding-right: 24px;
          flex-direction: column;
          align-items: stretch;
        }
        .goal-title {
          color: #255c99;
          text-align: center;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          align-self: start;
          margin: 0;
        }
        .goal-share {
          margin-top: 7px;
        }
        .goal-journal {
          margin-top: 11px;
        }
        .progress-indicator {
          display: flex;
          width: 100%;
          padding-left: 1px;
          padding-right: 1px;
          align-items: stretch;
        }
        .active-indicator {
          display: flex;
          padding-left: 2px;
          padding-right: 6px;
          align-items: center;
          justify-content: start;
          flex: 1;
        }
        .progress-start {
          aspect-ratio: 3.33;
          object-fit: contain;
          object-position: center;
          width: 40px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          flex-shrink: 0;
        }
        .progress-fill {
          aspect-ratio: 4.74;
          object-fit: contain;
          object-position: center;
          width: 57px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          flex-shrink: 1;
          flex: 1;
          flex-basis: 0%;
        }
        .progress-end {
          aspect-ratio: 3.33;
          object-fit: contain;
          object-position: center;
          width: 40px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          flex-shrink: 0;
        }
        .track-container {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: start;
          flex: 1;
        }
        .track {
          z-index: 0;
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          padding-top: 4px;
          padding-bottom: 4px;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          flex: 1;
          flex-shrink: 1;
          flex-basis: 0%;
        }
        .track-line {
          border-radius: 8px;
          background-color: rgba(223, 223, 223, 1);
          display: flex;
          flex-shrink: 0;
          height: 4px;
        }
        .track-end {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 4px;
          align-self: start;
          position: absolute;
          z-index: 0;
          flex-shrink: 0;
          right: 0px;
          top: 50%;
          transform: translate(0%, -50%);
          height: 4px;
        }
        .completed-indicator {
          aspect-ratio: 28.57;
          object-fit: contain;
          object-position: center;
          width: 340px;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
}

export default GoalTracker;
