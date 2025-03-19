'use client';
import React from 'react';
import ProfileInfo from './ProfileInfo';
import GoalProgressList from './../Home/GoalProgressList.tsx';
import GroupsList from './GroupsList';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <main className="profile-content">
        <ProfileInfo
          name="Jacob Watts"
          role="Student at BYU"
          scripture="3 Nephi 5 : 13"
          email="JacobWatts@byu.edu"
          profileImage="https://cdn.builder.io/api/v1/image/assets/TEMP/05b353f5327ffad432127b5b7a7ae29ae8aaf449"
        />

        <GoalProgressList />

        <GroupsList
          groups={[
            { name: 'Come Follow Me 112th Ward' },
            { name: 'Covenants' },
            { name: 'Best Friends' },
            { name: 'Family Home Evening' },
          ]}
        />
      </main>

      <style jsx>{`
        .profile-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #fff;
        }

        .profile-content {
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 41px;
          padding-bottom: 20px;
        }

        @media (max-width: 640px) {
          .profile-content {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
