import React from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import ViewMoreButton from './ViewMoreButtion';

function Projects() {
  return (
    <section id="projects">
      <div className="w-full flex flex-col items-center justify-center">
        <h4>What I&apos;ve Built</h4>
        <ProjectsCarousel />
        <ViewMoreButton />
      </div>
    </section>
  );
}

export default Projects;
