import React from 'react';
import { NAME } from '../constants';
import Socials from './Socials';

function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-12"
    >
      <Socials />
      <div className="flex flex-col sm:flex-row sm:space-x-2 sm:justify-center">
        <span>Created and designed by</span>
        <span className="text-gray-900 dark:text-gray-100 font-medium">{NAME}</span>
      </div>
    </footer>
  );
}

export default Footer;
