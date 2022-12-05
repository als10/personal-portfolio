import * as React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

function Layout({ darkMode, toggleTheme, children }) {
  return (
    <div className="dark:bg-black dark:text-gray-100">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className="px-4 sm:px-12 lg:px-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
