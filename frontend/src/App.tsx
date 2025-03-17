import { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import NotableApp from './components/CreatePost/NotableApp';
import NotesApp from './components/Notes Page/NotesApp';
import HomePage from './components/Home/HomePage';
import './App.css';

import Layout from './components/Layout/Layout';
import React from 'react';
import PublicGroupsPage from './components/Groups';

function App() {
  return (
    <>
      <Layout>;

      </Layout>
      
      <LoginPage />;
      <HomePage />;
      <PublicGroupsPage />;
      <NotesApp />
    </>
  );
}

export default App;
