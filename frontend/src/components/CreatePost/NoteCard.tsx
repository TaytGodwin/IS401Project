import { TagIcon, ShareIcon } from './Icons';

export const NoteCard = () => {
  return (
    <article className="note-card">
      <div className="drag-handle" aria-hidden="true" />
      <h2 className="note-title">Charity</h2>
      <p className="note-content">
        Today, I studied Moroni 7:47: "But charity is the pure love of Christ,
        and it endureth forever..." I realized that charity isn't just about
        giving—it's about seeing others as Christ does. When I focus on love
        first, my actions naturally follow.
      </p>
      <div className="action-buttons">
        <button className="action-button" aria-label="Add tag">
          <TagIcon />
        </button>
        <button className="action-button" aria-label="Share note">
          <ShareIcon />
        </button>
      </div>
      <style jsx>{`
        .note-card {
          height: 723px;
          border-radius: 28px 28px 0 0;
          margin-top: 33px;
          position: relative;
          box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
            0px 1px 3px 0px rgba(0, 0, 0, 0.3);
          background-color: #b0b7c3;
        }
        .drag-handle {
          width: 32px;
          height: 4px;
          border-radius: 100px;
          margin: 16px auto;
          background-color: #255c99;
        }
        .note-title {
          color: #255c99;
          font-size: 27px;
          text-align: center;
          width: 261px;
          height: 48px;
          border: 1px solid #255c99;
          border-radius: 8px;
          margin: 24px auto;
          background-color: #fff;
        }
        .note-content {
          color: #255c99;
          font-size: 20px;
          text-align: center;
          line-height: 1.5;
          width: 320px;
          height: 344px;
          border: 1px solid #255c99;
          border-radius: 10px;
          margin: 26px auto;
          padding: 12px;
          background-color: #fff;
        }
        .action-buttons {
          position: absolute;
          bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 26px;
        }
        .action-button {
          width: 114px;
          height: 50px;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 2px 6px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #255c99;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .note-card {
            height: auto;
            min-height: calc(100vh - 129px);
          }
        }
        @media (max-width: 640px) {
          .note-card {
            border-radius: 20px 20px 0 0;
          }
          .note-title {
            width: 80%;
          }
          .note-content {
            width: 90%;
          }
          .action-buttons {
            padding: 0 16px;
          }
        }
      `}</style>
    </article>
  );
};
