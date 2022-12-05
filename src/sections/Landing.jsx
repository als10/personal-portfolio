import React from 'react';
import Typewriter from 'typewriter-effect';
import Socials from '../components/Socials';
import { NAME, TYPEWRITER_STRINGS } from '../constants';

function Landing() {
  return (
    <section className="relative inset-0 h-screen sm:top-0 lg:pl-8 xl:pl-16">
      <div>
        <div className="mb-24 space-y-8">
          <div className="text-2xl md:text-4xl lg:text-5xl">
            Hi, I&apos;m
          </div>
          <h1>
            {NAME}
            ,
          </h1>
          <h3 className="text-gray-600 dark:text-gray-400">
            <Typewriter
              options={{
                strings: TYPEWRITER_STRINGS.map((s) => s.concat('.')),
                autoStart: true,
                loop: true,
                delay: 35,
                deleteSpeed: 35,
                pauseFor: 5000,
              }}
            />
          </h3>
        </div>
        <div className="absolute bottom-8 left-4">
          <Socials />
        </div>
      </div>
    </section>
  );
}

export default Landing;
