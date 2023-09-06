import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import Result from './components/Result';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route path="/" element={<Search />} />

          {['/search', '/images', '/news', '/videos'].map((path, i) => (
            <Route key={i} path={path} element={<Result />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
