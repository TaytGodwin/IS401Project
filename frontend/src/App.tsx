import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Home/HomePage';
import PublicGroupsPage from './components/Groups/PublicGroupsPage';
import CreatePostPage from './components/CreatePost/CreatePostPage'; // Corrected import
import NotesList from './components/Notes/NotePage'; // NotesList component
import React from 'react';

function Settings(){

  return(
    <div>

    <p>This page is settings </p>

    </div>

  );
}
function Profile(){

  return(
    <div>

  <h1> Profile </h1>

    </div>

  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="menu" element={<HomePage />} />
          <Route path="all-groups" element={<PublicGroupsPage />} />
          <Route path="make-a-post" element={<CreatePostPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          {/* CreatePost route */}
          <Route path="notes" element={<NotesList />} />
          <Route path="recent-chat" element={<ChatInterface />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/menu" />} />{' '}
          {/* Fallback for unknown routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
