'use client';
import NoteEditor from './NoteEditor';

const CreatePostPage = () => {
  return (
    <main className="app-container">
      <div className="app-wrapper">
        <NoteEditor />
      </div>

      <style jsx>{`
        .app-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
          background-color: #fff;
        }

        .app-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </main>
  );
};

export default CreatePostPage;
