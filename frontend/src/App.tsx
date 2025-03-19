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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="menu" element={<HomePage />} />
          <Route path="all-groups" element={<PublicGroupsPage />} />
          <Route path="create-post-page" element={<CreatePostPage />} />
          {/* CreatePost route */}
          <Route path="notes" element={<NotesList />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/menu" />} />{' '}
          {/* Fallback for unknown routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
