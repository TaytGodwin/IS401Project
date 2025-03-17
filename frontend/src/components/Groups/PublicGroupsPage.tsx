'use client';
import * as React from 'react';

const PublicGroupsPage: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
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

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="status-bar">
        <div className="time">9:41</div>
        <div className="spacer" />
        <div className="icons">
          <svg
            width="135"
            height="14"
            viewBox="0 0 135 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="status-icons"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.1152 2.03302C43.1152 1.39997 42.6376 0.886791 42.0485 0.886791H40.9818C40.3927 0.886791 39.9152 1.39997 39.9152 2.03302V11.967C39.9152 12.6 40.3927 13.1132 40.9818 13.1132H42.0485C42.6376 13.1132 43.1152 12.6 43.1152 11.967V2.03302ZM35.681 3.33207H36.7477C37.3368 3.33207 37.8144 3.85757 37.8144 4.50581V11.9395C37.8144 12.5877 37.3368 13.1132 36.7477 13.1132H35.681C35.0919 13.1132 34.6144 12.5877 34.6144 11.9395V4.50581C34.6144 3.85757 35.0919 3.33207 35.681 3.33207ZM31.3493 5.98112H30.2826C29.6935 5.98112 29.2159 6.51331 29.2159 7.1698V11.9245C29.2159 12.581 29.6935 13.1132 30.2826 13.1132H31.3493C31.9384 13.1132 32.4159 12.581 32.4159 11.9245V7.1698C32.4159 6.51331 31.9384 5.98112 31.3493 5.98112ZM26.0485 8.42641H24.9818C24.3927 8.42641 23.9152 8.951 23.9152 9.59811V11.9415C23.9152 12.5886 24.3927 13.1132 24.9818 13.1132H26.0485C26.6376 13.1132 27.1152 12.5886 27.1152 11.9415V9.59811C27.1152 8.951 26.6376 8.42641 26.0485 8.42641Z"
              fill="#EDEDED"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.6865 3.30213C61.1736 3.30223 63.5656 4.22432 65.3681 5.8778C65.5038 6.00545 65.7208 6.00384 65.8545 5.87419L67.152 4.61072C67.2197 4.54496 67.2574 4.45588 67.2568 4.3632C67.2563 4.27052 67.2175 4.18187 67.149 4.11688C62.418 -0.257833 54.9542 -0.257833 50.2232 4.11688C50.1547 4.18183 50.1158 4.27044 50.1152 4.36313C50.1145 4.45581 50.1522 4.54491 50.2199 4.61072L51.5177 5.87419C51.6513 6.00404 51.8684 6.00565 52.0041 5.8778C53.8068 4.22421 56.1991 3.30212 58.6865 3.30213ZM58.6831 7.5224C60.0404 7.52232 61.3493 8.03406 62.3554 8.95819C62.4915 9.08934 62.7059 9.0865 62.8385 8.95178L64.1258 7.63247C64.1936 7.56327 64.2312 7.46939 64.2303 7.37184C64.2293 7.27429 64.1898 7.18121 64.1206 7.11342C61.0568 4.22257 56.3121 4.22257 53.2482 7.11342C53.179 7.18121 53.1395 7.27434 53.1386 7.37192C53.1377 7.4695 53.1755 7.56337 53.2434 7.63247L54.5303 8.95178C54.663 9.0865 54.8773 9.08934 55.0134 8.95819C56.0189 8.03467 57.3267 7.52297 58.6831 7.5224ZM61.2075 10.316C61.2095 10.4213 61.1724 10.5229 61.1051 10.5967L58.9284 13.0514C58.8646 13.1236 58.7776 13.1642 58.6869 13.1642C58.5961 13.1642 58.5091 13.1236 58.4453 13.0514L56.2683 10.5967C56.201 10.5228 56.164 10.4212 56.166 10.3159C56.168 10.2105 56.2088 10.1108 56.2788 10.0401C57.6689 8.72625 59.7048 8.72625 61.0949 10.0401C61.1649 10.1108 61.2056 10.2106 61.2075 10.316Z"
              fill="#EDEDED"
            />
            <rect
              opacity="0.35"
              x="74.7568"
              y="1"
              width="24"
              height="12"
              rx="3.8"
              stroke="#EDEDED"
            />
            <path
              opacity="0.4"
              d="M100.257 5.28113V9.3566C101.062 9.01143 101.585 8.20847 101.585 7.31886C101.585 6.42926 101.062 5.6263 100.257 5.28113Z"
              fill="#EDEDED"
            />
            <rect
              x="76.2568"
              y="2.5"
              width="21"
              height="9"
              rx="2.5"
              fill="#EDEDED"
            />
          </svg>
        </div>
      </div>
      <div className="nav-bar">
        <div className="menu-container">
          <button className="menu-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
                stroke="#EDEDED"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <h1 className="app-title">Notable</h1>
        <div className="logo-container">
          <img src="URL_XXX" alt="Notable logo" className="logo-image" />
        </div>
      </div>

      <style jsx>{`
        .header {
          width: 100%;
          height: 96px;
          background-color: #255c99;
          display: flex;
          flex-direction: column;
        }
        .status-bar {
          width: 100%;
          height: 41px;
          padding-top: 21px;
          background-color: #255c99;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 16px;
          padding-right: 16px;
        }
        .time {
          color: #ededed;
          font-size: 17px;
          font-weight: 590;
          font-family: 'SF Pro';
        }
        .spacer {
          width: 124px;
        }
        .status-icons {
          flex: 1;
        }
        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 16px;
          padding-right: 16px;
          height: 55px;
        }
        .menu-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .menu-button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px;
          border-radius: 6px;
          background-color: #255c99;
          border: none;
          cursor: pointer;
        }
        .app-title {
          color: #ededed;
          font-size: 16px;
          font-weight: 700;
          font-family: Roboto;
        }
        .logo-container {
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          overflow: hidden;
        }
        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </header>
  );
};

const SearchSection: React.FC = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
              fill="#255C99"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Public Group"
          className="search-input"
        />
        <button className="filter-button">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 10.5H18M3 5.5H18M3 15.5H18"
              stroke="#255C99"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .search-section {
          width: 100%;
          height: 48px;
          position: relative;
          margin-bottom: 24px;
        }
        .search-container {
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          display: flex;
          align-items: center;
        }
        .search-icon {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .search-input {
          width: 100%;
          height: 37px;
          padding-left: 60px;
          padding-right: 40px;
          border-radius: 20px;
          border-width: 1px;
          border-color: #255c99;
          color: #255c99;
          font-weight: 700;
          font-size: 16px;
        }
        .filter-button {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </section>
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
      imageSrc: 'URL_XXX',
    },
    {
      id: 2,
      title: 'Faith & Fellowship',
      description:
        'Connect with others to strengthen your faith through gospel discussions and uplifting messages.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 3,
      title: 'Book Club',
      description:
        'Read and discuss inspiring books by Church leaders and gospel scholars.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 4,
      title: 'Covenants',
      description:
        'Prepare for temple ordinances by studying covenants, symbolism, and sacred teachings.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 5,
      title: 'Temples',
      description:
        "Applying Christ's teachings to daily life through faith, service, and discipleship.",
      imageSrc: 'URL_XXX',
    },
    {
      id: 6,
      title: 'Converts',
      description:
        'A welcoming place for new members and investigators to learn and ask questions.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 7,
      title: 'Parenting',
      description:
        'A gospel-centered community for parents to support and uplift each other.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 8,
      title: 'Apostolic Teachings',
      description:
        'Studying the latest General Conference talks and insights from leaders.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 9,
      title: 'Missionary Prep',
      description:
        'For those preparing to serve or returning missionaries who want to continue sharing the gospel.',
      imageSrc: 'URL_XXX',
    },
    {
      id: 10,
      title: 'Parables of Jesus',
      description:
        'Dive deep into the parables and lessons taught by the Savior to better understand their meaning and application in our lives.',
      imageSrc: 'URL_XXX',
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

const FloatingActionButton: React.FC = () => {
  return (
    <div className="fab-container">
      <button className="fab-button">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 4.66669V16.3334M4.66669 10.5H16.3334"
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
        }
        .fab-button {
          width: 43px;
          height: 43px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          background-color: rgba(37, 92, 153, 0.94);
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PublicGroupsPage;
