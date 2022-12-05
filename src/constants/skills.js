import AndroidStudio from '../images/skills/android-studio.svg';
import CSharp from '../images/skills/c-sharp.svg';
import C from '../images/skills/c.svg';
import CPP from '../images/skills/cpp.svg';
import CSS from '../images/skills/css.svg';
import Express from '../images/skills/express.png';
import Firebase from '../images/skills/firebase.png';
import Flutter from '../images/skills/flutter.svg';
import Gatsby from '../images/skills/gatsby.png';
import Git from '../images/skills/git.svg';
import HTML from '../images/skills/html.svg';
import Java from '../images/skills/java.svg';
import JavaScript from '../images/skills/javascript.svg';
import MongoDB from '../images/skills/mongodb.svg';
import MySQL from '../images/skills/mysql.svg';
import NodeJS from '../images/skills/nodejs.svg';
import Python from '../images/skills/python.svg';
import React from '../images/skills/react.svg';
import SQLite from '../images/skills/sqlite.png';
import Tailwind from '../images/skills/tailwind.svg';
import Unity from '../images/skills/unity.svg';

const skills = [
  {
    type: 'Frontend',
    technologies: [
      { name: 'ReactJS', logo: React },
      { name: 'GatsbyJS', logo: Gatsby },
      { name: 'Flutter', logo: Flutter },
      { name: 'Tailwind CSS', logo: Tailwind },
      { name: 'HTML', logo: HTML },
      { name: 'CSS', logo: CSS },
      { name: 'JavaScript', logo: JavaScript },
    ],
  },
  {
    type: 'Backend',
    technologies: [
      { name: 'NodeJS', logo: NodeJS },
      { name: 'Express', logo: Express },
      { name: 'MongoDB', logo: MongoDB },
      { name: 'MySQL', logo: MySQL },
      { name: 'SQLite3', logo: SQLite },
      { name: 'Firebase', logo: Firebase },
    ],
  },
  {
    type: 'Miscellaneous',
    technologies: [
      { name: 'Java', logo: Java },
      { name: 'Python', logo: Python },
      { name: 'C', logo: C },
      { name: 'C++', logo: CPP },
      { name: 'C#', logo: CSharp },
      { name: 'Git', logo: Git },
      { name: 'Unity', logo: Unity },
      { name: 'Android Studio', logo: AndroidStudio },
    ],
  },
];

export default skills;
