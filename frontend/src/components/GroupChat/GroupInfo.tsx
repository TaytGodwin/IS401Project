import * as React from 'react';

interface GroupInfoProps {
  avatarUrl: string;
  groupName: string;
}

const GroupInfo: React.FC<GroupInfoProps> = ({ avatarUrl, groupName }) => {
  return (
    <section className="group-info">
      <div className="avatar-container">
        <img src={avatarUrl} alt={`${groupName}`} className="group-avatar" />
      </div>
      <h1 className="group-name">{groupName}</h1>

      <style jsx>{`
        .group-info {
          position: relative;
          display: flex;
          align-items: center;
        }

        .avatar-container {
          width: 68px;
          height: 68px;
          border-radius: 9999px;
          border: 1px solid #255c99;
          overflow: hidden;
        }

        .group-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
