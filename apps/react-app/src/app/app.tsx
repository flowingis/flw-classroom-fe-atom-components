import { FC } from 'react';
import styles from './app.module.scss';
import AtomsPage from './pages/AtomsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TDDPage from './pages/TDDPage';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <header>
        <h1>Welcome to Flowing Classroom!</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="atoms" element={<AtomsPage />} />
            <Route path="tdd" element={<TDDPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
