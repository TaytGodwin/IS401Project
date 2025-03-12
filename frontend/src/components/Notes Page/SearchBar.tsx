'use client';
import * as React from 'react';

const SearchBar: React.FC = () => {
  return (
    <section className="search-container">
      <div className="search-wrapper">
        <div className="search-inner">
          <div className="search-bar">
            <div className="search-input-container">
              <span className="search-placeholder">Search Public Group</span>
              <button className="search-button">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bae30736ba4d42840a4902905dcde18c39abf29df1f5db1669575923a7bbfe22?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                  className="search-icon"
                />
              </button>
            </div>
            <button className="toggle-button">
              <div className="toggle-container">
                <div className="toggle-state-layer">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bab7b8293890d77e7811fd371cbf1bd374e2e2b933328a0d6c22bb87ddc764?placeholderIfAbsent=true&apiKey=5772a9266ca348ed8dd6592625c65d84"
                    className="toggle-icon"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <style react-jsx>{`
        .search-container {
          position: absolute;
          z-index: 0;
          display: flex;
          width: 393px;
          flex-direction: column;
          right: 0px;
          top: 87px;
          height: 70px;
        }
        .search-wrapper {
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          width: 100%;
          padding: 2px 8px;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }
        .search-inner {
          display: flex;
          min-height: 67px;
          padding: 10px 15px;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }
        .search-bar {
          width: 100%;
          padding: 3px 0;
        }
        .search-input-container {
          border-radius: 20px;
          border-color: rgba(37, 92, 153, 1);
          border-style: solid;
          border-width: 1px;
          z-index: 10;
          display: flex;
          width: 100%;
          padding: 1px 7px 1px 39px;
          align-items: stretch;
          gap: 20px;
          justify-content: space-between;
        }
        .search-placeholder {
          color: #255c99;
          font-family: Roboto, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-top: auto;
          margin-bottom: auto;
        }
        .search-button {
          justify-content: center;
          align-items: center;
          border-radius: var(--sds-typography-scale-06);
          border: none;
          background: transparent;
          display: flex;
          min-height: 35px;
          padding: 0 7px 0 8px;
          gap: 8px;
          overflow: hidden;
          width: 35px;
          height: 35px;
          cursor: pointer;
        }
        .search-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 20px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
        }
        .toggle-button {
          display: flex;
          margin-top: -42px;
          min-height: 48px;
          width: 48px;
          padding: 4px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .toggle-container {
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          background-color: #fff;
          display: flex;
          width: 100%;
          gap: 10px;
          overflow: hidden;
          height: 40px;
        }
        .toggle-state-layer {
          align-self: stretch;
          display: flex;
          margin-top: auto;
          margin-bottom: auto;
          width: 40px;
          padding: 8px;
          align-items: center;
          gap: -24px;
          justify-content: center;
        }
        .toggle-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin-top: auto;
          margin-bottom: auto;
        }
      `}</style>
    </section>
  );
};

export default SearchBar;
