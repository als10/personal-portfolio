import React from 'react';
import { SKILLS } from '../constants';

function Skill({ skill }) {
  return (
    <div className="hvr-bounce-in flex flex-col items-center">
      <img
        className="p-2 h-8 sm:h-16 w-8 sm:w-16 bg-gray-100 rounded-lg mb-4"
        src={skill.logo}
        alt={`${skill.name} logo`}
      />
      <div className="text-sm sm:text-base lg:text-md text-center">{skill.name}</div>
    </div>
  );
}

function Skillset({ skillset }) {
  return (
    <div className="mx-auto my-8 rounded-lg w-full 2xl:w-2/3 sm:w-4/5">
      <h5 className="mb-8">{skillset.type}</h5>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {skillset.technologies.map((s) => <Skill key={s.name} skill={s} />)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="flex-col"
    >
      <h4>What I know</h4>
      {SKILLS.map((s) => <Skillset key={s.type} skillset={s} />)}
    </section>
  );
}

export default Skills;
