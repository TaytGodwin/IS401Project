// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';

// // const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);

// //   return (
// //     <div className="layout relative">
// //       {/* Navbar at the top */}
// //       <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

// //       {/* Render Sidebar so that it can slide in/out */}
// //       <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

// //       {/* Main content area */}
// //       <div
// //         className="content"
// //         style={{
// //           // For push behavior, adjust the margin; remove if you prefer overlay.
// //           marginLeft: sidebarOpen ? '281px' : '0',
// //           marginTop: '96px',
// //           transition: 'margin-left 0.3s ease-in-out',
// //         }}
// //       >
// //         {children}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Layout;

// // Layout.js

// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Layout = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="layout">
//       <header>
//         <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
//       </header>
//       <main>
//         {/* This Outlet renders the matched child route components */}
//         <Outlet />
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default Layout;

// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Layout: React.FC = () => {
//   // Manage the open/closed state of the sidebar
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Top fixed header could be added here if needed */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar is rendered as part of the flex row */}
//         <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

//         {/* Main content area is pushed to the right by the sidebar’s width */}
//         <div
//           className={`flex-1 transition-all duration-300 p-4 ${
//             isSidebarOpen ? 'ml-64' : 'ml-16'
//           }`}
//         >
//           <Outlet />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Optional: a top header can be here */}
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Navbar) is on the left */}
        <Navbar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main content area that is pushed to the right */}
        <div className="flex-1 p-4 transition-all duration-300">
          <Outlet />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;