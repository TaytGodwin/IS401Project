import { MenuIcon } from './Icons';

export const Header = () => {
  return (
    <nav className="header">
      <button className="menu-button" aria-label="Open menu">
        <MenuIcon />
      </button>
      <h1 className="title">Notable</h1>
      <style jsx>{`
        .header {
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background-color: #255c99;
        }
        .menu-button {
          position: absolute;
          left: 11px;
          width: 44px;
          height: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
        }
        .title {
          color: #ededed;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
      `}</style>
    </nav>
  );
};
