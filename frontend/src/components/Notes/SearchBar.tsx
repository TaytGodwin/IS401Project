import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <form className="search-container">
      <div className="search-border" />
      
      <div className="search-icon">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#255C99"></path>
            </svg>`,
          }}
        />
      </div>

      <label htmlFor="search-input" className="visually-hidden">
        Search Public Group
      </label>

      <input
        id="search-input"
        className="search-input"
        placeholder="Search Public Group"
      />

      <button type="button" className="menu-button">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10.5H18M3 5.5H18M3 15.5H18" stroke="#255C99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`,
          }}
        />
      </button>

      <style jsx>{`
        .search-container {
          position: relative;
          width: 100%;
          height: 48px;
          margin-bottom: 16px;
        }

        .search-border {
          position: absolute;
          left: 15px;
          right: 15px;
          top: 0;
          bottom: 0;
          border: 1px solid #255c99;
          border-radius: 24px;
        }

        .search-icon {
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          pointer-events: none;
        }

        .search-input {
          position: absolute;
          left: 67px;
          right: 60px;
          height: 100%;
          line-height: 48px;
          background: transparent;
          border: none;
          color: #255c99;
          font-size: 16px;
          font-weight: 700;
          outline: none;
          padding: 0;
        }

        .search-input::placeholder {
          color: #255c99;
        }

        .menu-button {
          position: absolute;
          top: 6px;
          right: 21px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </form>
  );
};

export default SearchBar;
