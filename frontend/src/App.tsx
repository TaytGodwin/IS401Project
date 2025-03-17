import { useState } from 'react';
import LoginPage from './components/Login/LoginPage';
import NotableApp from './components/CreatePost/NotableApp';
import NotePage from './components/Notes/NotePage';
import HomePage from './components/Home/HomePage'
import './App.css';

import Layout from './components/Layout/Layout';
import React from 'react';
import PublicGroupsPage from './components/Groups';

function App() {
  return (
    <>
    <Layout>;

    </Layout>


    <NotePage />
      
      <LoginPage />
      <HomePage />
      <PublicGroupsPage />
    </>
  );
}

export default App;
