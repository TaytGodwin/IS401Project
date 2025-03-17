import { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import NotableApp from './components/CreatePost/NotableApp';
import NotePage from './components/Notes/NotePage';
import './App.css';

import Layout from './components/Layout/Layout';
import React from 'react';
import PublicGroupsPage from './components/Groups';

function App() {
  return (
    <>
    <Layout>
      <LoginPage />;
      <StudyDashboard />;
    </Layout>

    <PublicGroupsPage />
    <NotePage />
      
      <LoginPage />;
      <HomePage />;
      <PublicGroupsPage />;
      <NotesApp />
    </>
  );
}

export default App;
