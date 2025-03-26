// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="layout relative">
//       {/* Navbar at the top */}
//       <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//       {/* Render Sidebar so that it can slide in/out */}
//       <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

//       {/* Main content area */}
//       <div
//         className="content"
//         style={{
//           // For push behavior, adjust the margin; remove if you prefer overlay.
//           marginLeft: sidebarOpen ? '281px' : '0',
//           marginTop: '96px',
//           transition: 'margin-left 0.3s ease-in-out',
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;

// Layout.js

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const hideNavbarRoutes = ['/login']; // add more if needed
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="layout">
      {!shouldHideNavbar && (
        <header>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
      )}
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
