import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const projects = [
  {
    title: 'Side Project Ideas',
    stack: ['MongoDB', 'Express', 'ReactJS', 'NodeJS'],
    date: 'May 2021',
    description: 'A web app that allows users to create accounts and post side project ideas for those who lack inspiration.',
    link: '',
    github: ''
  },
  {
    title: 'Climb',
    languages: ['C#', 'Unity'],
    date: 'May to June 2020',
    description: 'An Android game with simple controls, in which a player has to climb up a building without clicking in the wrong direction. Self-taught Unity and C# for its development and self-designed all in-game graphics.',
    link: '',
    github: ''
  },
  {
    title: 'Cricket Statistics Calculator',
    languages: ['Java', 'SQLite', 'Android Studio'],
    date: 'December 2018 to February 2019',
    description: 'An Android app that helps cricketers track the stats from all their matches and stores it in a database.',
    link: '',
    github: ''
  },
  {
    title: 'Coffee Farm Tools',
    languages: ['Java', 'Android Studio'],
    date: 'July to September 2018',
    description: 'An Android app that helps coffee farmers by providing ready-made calculators for their various needs.',
    link: '',
    github: ''
  },
  {
    title: 'Tic-Tac-Toe AI',
    languages: ['Python'],
    date: 'January 2021',
    description: 'An AI that uses the minimax algorithm to always win or draw a game of tic-tac-toe.',
    link: '',
    github: ''
  },
  {
    title: 'Online Course Management System',
    languages: ['Python', 'MySQL', 'PyQt'],
    date: 'July 2020',
    description: 'A Python program that stores details of online courses from different websites in one place, and makes finding relevant online course easy with sort and search functionality.',
    link: '',
    github: ''
  },
]

const Button = ({ text, url }) => (
  <Link
    class="p-4 rounded-lg bg-black text-white hover:bg-white hover:text-black hover:border-black"
    to={url}
  >
    {text}
  </Link>
)

const Technology = ({ item }) => (
  <div class="bg-gray-200 p-2 rounded-md">
    {item}
  </div>
)

const Project = ({ project }) => (
  <div class="w-full flex flex-col xl:flex-row space-x-8 space-y-8 bg-gray-300 m-8 p-8 md:p-16 rounded-xl items-center w-2/3">
    <StaticImage
      class="w-2/3 rounded-lg"
      alt="project demo"
      src="../images/placeholder_image.png"
    />
    <div class="flex flex-col space-y-4">
      <div class="space-y-2">
        <h5>{project.title}</h5>
        <p>{project.description}</p>
      </div>
      <div class="flex space-x-2">
        {project.stack.map(e => <Technology item={e} />)}
      </div>
      <div class="flex space-x-2">
        <Button text="Visit Project" url={project.link} />
        <Button text="View Code" url={project.github} />
      </div>
    </div>
  </div>
)

export const Projects = () => (
  <section>
    <div class="w-full flex flex-col items-center jutify-center">
      <h4>Stuff I've made</h4>
      <div class="flex">
        <Project project={projects[0]}/>
        {/* {projects.map(p => <Project project={p} />)} */}
      </div>
    </div>
  </section>
)