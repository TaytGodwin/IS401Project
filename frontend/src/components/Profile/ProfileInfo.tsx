import React from 'react';

interface ProfileInfoProps {
  name: string;
  role: string;
  scripture: string;
  email: string;
  profileImage: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  role,
  scripture,
  email,
  profileImage,
}) => {
  return (
    <section className="profile-info">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        <p className="profile-scripture">{scripture}</p>
        <p className="profile-email">{email}</p>
      </div>

      <style jsx>{`
        .profile-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          margin-top: 40px;
        }

        .profile-image {
          width: 138px;
          height: 141px;
          border: 2px solid #255c99;
          border-radius: 4px;
          object-fit: cover;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .profile-name {
          color: #255c99;
          font-family: Roboto, sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }

        .profile-role,
        .profile-scripture,
        .profile-email {
          color: #255c99;
          font-family: Roboto, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default ProfileInfo;
