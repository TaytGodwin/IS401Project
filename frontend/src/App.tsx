import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './components/Login/LoginPage';
import StudyDashboard from './components/Home/StudyDashboard';
import NotableApp from './components/CreatePost/NotableApp';
import NotesApp from './components/Notes Page/NotesApp';
import './App.css';

import Layout from './components/Layout/Layout'

function App() {
  return (
    <>
      <LoginPage />;
      <StudyDashboard />;
      <NotableApp />;
      <NotesApp />
    </>
  );
}

export default App;
