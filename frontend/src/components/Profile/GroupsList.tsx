'use client';
import React from 'react';
import GroupItem from './GroupItem';

interface Group {
  name: string;
}

interface GroupsListProps {
  groups: Group[];
}

const GroupsList: React.FC<GroupsListProps> = ({ groups }) => {
  return (
    <section className="groups-section">
      <div className="groups-header">
        <h2 className="groups-title">GROUPS</h2>
        <button className="add-group-button">
          
        </button>
      </div>

      <div className="groups-list">
        {groups.map((group, index) => (
          <GroupItem key={index} name={group.name} />
        ))}
      </div>

      <style jsx>{`
        .groups-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .groups-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .groups-title {
          color: #255c99;
          font-family: Inter, sans-serif;
          font-size: 17px;
          font-weight: 700;
          margin: 0;
        }

        .add-group-button {
          display: flex;
          width: 43px;
          height: 43px;
          padding: 8px;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          background-color: rgba(37, 92, 153, 0.94);
          border: none;
          cursor: pointer;
        }

        .groups-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </section>
  );
};

export default GroupsList;
