import { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import StudyDashboard from './components/Home/StudyDashboard';
import NotableApp from './components/CreatePost/NotableApp';
import NotesApp from './components/Notes Page/NotesApp';
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
        <PublicGroupsPage />;
        <NotesApp />
      </Layout>
    </>
  );
}

export default App;
