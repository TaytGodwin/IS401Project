'use client';
import * as React from 'react';

const PublicGroupsPage: React.FC = () => {
  return (
    <div className="page-container">
      <main className="main-content">
        <SearchSection />
        <h2 className="section-title">All Public Groups</h2>
        <GroupGrid />
      </main>
      <FloatingActionButton />

      <style jsx>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
          background-color: #fff;
        }
        .main-content {
          padding: 20px 16px;
        }
        .section-title {
          color: #255c99;
          font-size: 21px;
          font-weight: 700;
          margin-bottom: 29px;
        }
      `}</style>
    </div>
  );
};

const SearchSection: React.FC = () => {
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


interface GroupCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const GroupCard: React.FC<GroupCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <article className="group-card">
      <div className="group-image-container">
        <img src={imageSrc} alt={title} className="group-image" />
      </div>
      <div className="group-content">
        <h3 className="group-title">{title}</h3>
        <p className="group-description">{description}</p>
      </div>

      <style jsx>{`
        .group-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px 10px;
          gap: 30px;
        }
        .group-image-container {
          width: 68px;
          height: 68px;
          border-radius: 9999px;
          border-width: 1px;
          border-color: #255c99;
          overflow: hidden;
        }
        .group-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .group-content {
          text-align: center;
        }
        .group-title {
          color: #255c99;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .group-description {
          font-size: 12px;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
    </article>
  );
};

const GroupGrid: React.FC = () => {
  const groups = [
    {
      id: 1,
      title: 'Come Follow Me Insights',
      description:
        'A group dedicated to discussing weekly Come, Follow Me readings and sharing personal insights.',
      imageSrc: './src/assets/allGroups/comefollowme.png',
    },
    {
      id: 2,
      title: 'Faith & Fellowship',
      description:
        'Connect with others to strengthen your faith through gospel discussions and uplifting messages.',
      imageSrc: './src/assets/allGroups/faith.png',
    },
    {
      id: 3,
      title: 'Book Club',
      description:
        'Read and discuss inspiring books by Church leaders and gospel scholars.',
      imageSrc: './src/assets/allGroups/bookclub.png',
    },
    {
      id: 4,
      title: 'Covenants',
      description:
        'Prepare for temple ordinances by studying covenants, symbolism, and sacred teachings.',
      imageSrc: './src/assets/allGroups/covenants.png',
    },
    {
      id: 5,
      title: 'Temples',
      description:
        "Applying Christ's teachings to daily life through faith, service, and discipleship.",
      imageSrc: './src/assets/allGroups/temples.png',
    },
    {
      id: 6,
      title: 'Converts',
      description:
        'A welcoming place for new members and investigators to learn and ask questions.',
      imageSrc: './src/assets/allGroups/converts.png',
    },
    {
      id: 7,
      title: 'Parenting',
      description:
        'A gospel-centered community for parents to support and uplift each other.',
      imageSrc: './src/assets/allGroups/parenting.png',
    },
    {
      id: 8,
      title: 'Apostolic Teachings',
      description:
        'Studying the latest General Conference talks and insights from leaders.',
      imageSrc: './src/assets/allGroups/apostles.png',
    },
    {
      id: 9,
      title: 'Missionary Prep',
      description:
        'For those preparing to serve or returning missionaries who want to continue sharing the gospel.',
      imageSrc: './src/assets/allGroups/missionary.png',
    },
    {
      id: 10,
      title: 'Parables of Jesus',
      description:
        'Dive deep into the parables and lessons taught by the Savior to better understand their meaning and application in our lives.',
      imageSrc: './src/assets/allGroups/jesus.png',
    },
  ];

  return (
    <section className="group-grid">
      {groups.map((group) => (
        <GroupCard
          key={group.id}
          title={group.title}
          description={group.description}
          imageSrc={group.imageSrc}
        />
      ))}

      <style jsx>{`
        .group-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 29px;
        }
        @media (max-width: 640px) {
          .group-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};


interface FloatingActionButtonProps {
  onClick?: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick }) => {
  return (
    <div className="fab-container">
      <button className="fab-button" onClick={onClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M5 12H19"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <style jsx>{`
        .fab-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 100;
        }

        .fab-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #255c99;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .fab-button:hover {
          background-color: #1e4a7a;
        }
      `}</style>
    </div>
  );
};



export default PublicGroupsPage;
