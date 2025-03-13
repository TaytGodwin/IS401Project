import LoginPage from './components/Login/LoginPage';
import StudyDashboard from './components/Home/StudyDashboard';
import NotableApp from './components/CreatePost/NotableApp';
import NotesApp from './components/Notes Page/NotesApp';
import './App.css';

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
