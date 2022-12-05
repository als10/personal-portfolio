import React from 'react';
import { SOCIALS } from '../constants';

function Socials() {
  return (
    <div className="flex space-x-4 justify-center mb-8">
      {SOCIALS.map((s) => (
        <a key={s.name} href={`${s.baseUrl}${s.id}`} target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d={s.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default Socials;
