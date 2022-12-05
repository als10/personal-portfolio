import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import Work from '../sections/work';
import Projects from '../sections/projects';
import Skills from '../sections/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(
    typeof localStorage !== 'undefined' && (localStorage.theme === 'dark' || (!('theme' in localStorage) && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)),
  );

  const toggleTheme = () => {
    if (localStorage) localStorage.theme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alston&apos;s Portfolio</title>
        <meta name="icon" href="../images/icon.png" />
      </Helmet>
      <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
        <Landing />
        <Work />
        <Projects />
        <Skills />
      </Layout>
    </div>
  );
}

export default App;
