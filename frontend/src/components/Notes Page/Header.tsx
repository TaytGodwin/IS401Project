'use client';
import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="app-top">
        <div className="app-top-inner">
          <div className="header-background">
            <div className="header-content">
              <div className="status-bar">
                <div className="status-bar-frame">
                  <div className="time">9:41</div>
                  <div className="dynamic-island-spacer"></div>
                  <div className="status-levels">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dccdd1fa50a4d57f080d11fee0f8b90cee5760c26223c236779841f6df9b49ec?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                      className="battery-icon"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4944cd2bbdaf01b0ec100c422c2cc1b718a3fecb129227a6b0a2cf717155cf82?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                      className="wifi-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="status-bar visible">
                <div className="status-bar-frame">
                  <div className="time visible">9:41</div>
                  <div className="dynamic-island-spacer"></div>
                  <div className="status-levels">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b113425c95ef379e9225321fa2bccfba1db920982ff326d4bdd54e3f62860fa?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                      className="battery-icon"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dbcfd1b701de8738fce4eb917b21d8d6eb768c894f3e2b030905082602fc947?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                      className="wifi-icon"
                    />
                  </div>
                </div>
              </div>
              <div className="header-nav">
                <div className="nav-left">
                  <button className="menu-button">
                    <div className="menu-button-inner">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2de3548d480afc6e1adeddd1b4bbe92c579b82382005cb28b82480e96e8f1375?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                        className="menu-icon"
                      />
                    </div>
                  </button>
                  <span className="logo-placeholder">(Logo) Notable</span>
                </div>
                <h1 className="app-title">Notable</h1>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/798914c60b2737c697bafc10f9cc83567d2bcf3dd4300a71f0fe33b8fc855fa2?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
          className="profile-image"
        />
      </div>
      <style jsx>{`
        .header-container {
          position: absolute;
          z-index: 0;
          display: flex;
          min-height: 96px;
          width: 393px;
          align-items: start;
          gap: 10px;
          justify-content: start;
          left: 50%;
          top: 0px;
          transform: translate(-50%, 0%);
          height: 96px;
        }
        .app-top {
          background-color: rgba(244, 244, 244, 1);
          position: relative;
          display: flex;
          min-height: 96px;
          width: 393px;
          align-items: start;
          gap: 10px;
          justify-content: center;
        }
        .app-top-inner {
          position: absolute;
          z-index: 0;
          display: flex;
          width: 393px;
          flex-direction: column;
          left: 0px;
          right: 0px;
          top: 0px;
          bottom: 0px;
        }
        .header-background {
          background-color: rgba(37, 92, 153, 1);
          width: 100%;
          padding-bottom: 21px;
        }
        .header-content {
          background-color: rgba(37, 92, 153, 1);
          box-shadow: 0px 16px 48px -4px rgba(12, 12, 13, 0.1);
          width: 100%;
        }
        .status-bar {
          background-color: rgba(37, 92, 153, 1);
          height: 41px;
          width: 100%;
          padding-top: 21px;
        }
        .status-bar.visible {
          z-index: 10;
          margin-top: -41px;
        }
        .status-bar-frame {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
        }
        .time {
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          padding-left: 16px;
          padding-right: 6px;
          gap: 10px;
          font-family: SF Pro, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 17px;
          color: rgba(0, 0, 0, 1);
          font-weight: 590;
          white-space: nowrap;
          text-align: center;
          line-height: 1;
          flex: 1;
          flex-shrink: 1;
          flex-basis: 0%;
        }
        .time.visible {
          color: rgba(237, 237, 237, 1);
        }
        .dynamic-island-spacer {
          align-self: stretch;
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          width: 124px;
          flex-shrink: 0;
          height: 10px;
        }
        .status-levels {
          align-self: stretch;
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          padding-left: 6px;
          padding-right: 16px;
          align-items: center;
          gap: 7px;
          justify-content: center;
          flex: 1;
          flex-shrink: 1;
          flex-basis: 0%;
        }
        .battery-icon {
          aspect-ratio: 1.58;
          object-fit: contain;
          object-position: center;
          width: 19px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          flex-shrink: 0;
        }
        .wifi-icon {
          aspect-ratio: 1.42;
          object-fit: contain;
          object-position: center;
          width: 17px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
          flex-shrink: 0;
        }
        .header-nav {
          z-index: 10;
          display: flex;
          margin-top: 7px;
          margin-bottom: -17px;
          width: 218px;
          max-width: 100%;
          align-items: stretch;
          gap: 20px;
          justify-content: space-between;
        }
        .nav-left {
          display: flex;
          align-items: stretch;
        }
        .menu-button {
          display: flex;
          align-items: start;
          justify-content: start;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }
        .menu-button-inner {
          border-radius: 32px;
          background-color: rgba(37, 92, 153, 1);
          border-color: rgba(37, 92, 153, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          width: 44px;
          padding: 12px;
          align-items: center;
          gap: 8px;
          overflow: hidden;
          justify-content: center;
          height: 44px;
        }
        .menu-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
        }
        .logo-placeholder {
          color: rgba(37, 92, 153, 1);
          font-size: 17px;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 400;
          line-height: 1;
          text-align: center;
          align-self: start;
          flex-basis: auto;
        }
        .app-title {
          color: #ededed;
          text-align: center;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-top: auto;
          margin-bottom: auto;
        }
        .profile-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 30px;
          border-radius: 50%;
          position: absolute;
          z-index: 0;
          flex-shrink: 0;
          left: 124px;
          bottom: 16px;
          height: 30px;
        }
      `}</style>
    </header>
  );
};

export default Header;
