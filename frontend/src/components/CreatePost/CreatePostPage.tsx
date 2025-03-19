'use client';
import NoteEditor from './NoteEditor';

const CreatePostPage = () => {
  return (
    <main className="app-container">
      <div className="app-wrapper">
        <div className="app-header-container"></div>
        <NoteEditor />
      </div>
      <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: #fff;
        }
        .app-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .app-header-container {
          width: 100%;
          height: 96px;
          background-color: #255c99;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </main>
  );
};

export default CreatePostPage;
