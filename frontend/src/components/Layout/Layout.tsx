import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout relative">
      {/* Navbar at the top */}
      <Navbar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Render Sidebar so that it can slide in/out */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div
        className="content"
        style={{
          // For push behavior, adjust the margin; remove if you prefer overlay.
          marginLeft: sidebarOpen ? '281px' : '0',
          marginTop: '96px',
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;