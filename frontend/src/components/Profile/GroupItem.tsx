'use client';
import React from 'react';
import { EditIcon, MoreIcon } from "./Icons";
interface GroupItemProps {
  name: string;
}

const GroupItem: React.FC<GroupItemProps> = ({ name }) => {
  return (
    <article className="group-item">
      <h3 className="group-name">{name}</h3>
      <div className="group-actions">
        <button className="action-button">
          <EditIcon />
        </button>
        <button className="action-button">
          <MoreIcon />
        </button>
      </div>

      <style jsx>{`
        .group-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #255c99;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        .group-name {
          color: #255c99;
          font-family: Roboto, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }

        .group-actions {
          display: flex;
          gap: 12px;
        }

        .action-button {
          display: flex;
          width: 40px;
          height: 40px;
          padding: 8px;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          background-color: #255c99;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </article>
  );
};

export default GroupItem;
