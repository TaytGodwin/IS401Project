import { useState } from 'react';
import LoginPage from './components/Login/LoginPage';

import NotableApp from './components/CreatePost/NotableApp';
import NotesApp from './components/Notes Page/NotesApp';
import PublicGroupsPage from './components/Groups/PublicGroupsPage';
import HomePage from './components/Home/HomePage'
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import React from 'react';


function App() {
  return (
    <Router>
    <Routes>
   
      <Route path="/" element={<Layout />}>
        {/* Redirect root to /home if you want / to show the homepage */}
        <Route path="Login" element={<LoginPage />} />
        {/* Route for your homepage at /home */}
        <Route path="menu" element={<HomePage />} />
        <Route path="all-groups" element={<PublicGroupsPage />} />
   
      
      </Route>
    </Routes>
  </Router>
);

}

export default App;
