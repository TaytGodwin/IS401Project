import * as React from 'react';

interface GroupInfoProps {
  avatarUrl: string;
  groupName: string;
}

const GroupInfo: React.FC<GroupInfoProps> = ({ avatarUrl, groupName }) => {
  return (
    <section className="group-info">
      <img src={avatarUrl} alt={`${groupName}`} className="group-avatar" />
      <h1 className="group-name">{groupName}</h1>

      <style jsx>{`
        .group-info {
          position: relative;
          display: flex;
          align-items: center;
        }

        .group-avatar {
          width: 78px;
          height: 71px;
          border-radius: 50%;
          border: 1px solid #255c99;
        }

        .group-name {
          color: #255c99;
          font-size: 16px;
          font-weight: 700;
          font-family: Roboto, sans-serif;
          margin-left: 16px;
        }
      `}</style>
    </section>
  );
};

export default GroupInfo;
