import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

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
    stack: ['C#', 'Unity'],
    date: 'May to June 2020',
    description: 'An Android game with simple controls, in which a player has to climb up a building without clicking in the wrong direction. Self-taught Unity and C# for its development and self-designed all in-game graphics.',
    link: '',
    github: ''
  },
  {
    title: 'Cricket Statistics Calculator',
    stack: ['Java', 'SQLite', 'Android Studio'],
    date: 'December 2018 to February 2019',
    description: 'An Android app that helps cricketers track the stats from all their matches and stores it in a database.',
    link: '',
    github: ''
  },
  {
    title: 'Coffee Farm Tools',
    stack: ['Java', 'Android Studio'],
    date: 'July to September 2018',
    description: 'An Android app that helps coffee farmers by providing ready-made calculators for their various needs.',
    link: '',
    github: ''
  },
  {
    title: 'Tic-Tac-Toe AI',
    stack: ['Python'],
    date: 'January 2021',
    description: 'An AI that uses the minimax algorithm to always win or draw a game of tic-tac-toe.',
    link: '',
    github: ''
  },
  {
    title: 'Online Course Management System',
    stack: ['Python', 'MySQL', 'PyQt'],
    date: 'July 2020',
    description: 'A Python program that stores details of online courses from different websites in one place, and makes finding relevant online course easy with sort and search functionality.',
    link: '',
    github: ''
  },
]

const HighlightedText = ({ style, children }) => (
  <div class={`text-sm sm:text-base p-2 m-1 rounded-lg ${style ?? ""}`}>
    {children}
  </div>
)

const Button = ({ text, url }) => (
  <HighlightedText style="xl:p-4 bg-black text-white hover:bg-white hover:text-black hover:border-black">
    <Link to={url}>{text}</Link>
  </HighlightedText>
)

const Technology = ({ item }) => (
  <HighlightedText style="bg-white dark:text-gray-800">
    {item}
  </HighlightedText>
)

const Project = ({ project }) => (
  <article class="mx-auto max-w-xl xl:max-w-5xl xl:flex xl:flex-row space-x-8 bg-gray-200 dark:bg-gray-800 sm:p-8 md:p-16 rounded-xl my-4 py-4 items-center justify-center">
    <StaticImage
      class="hidden mb-8 sm:flex w-full xl:w-1/2 rounded-lg"
      alt="project demo"
      src="../images/placeholder_image.png"
    />
    <div class="pr-16 flex flex-col space-y-4 w-full xl:w-1/2">
      <div class="space-y-2">
        <h5>{project.title}</h5>
        <p class="wrap">{project.description}</p>
      </div>
      <div class="flex flex-wrap">
        {project.stack.map(e => <Technology item={e} />)}
      </div>
      <div class="flex flex-wrap">
        <Button text="Visit Project" url={project.link} />
        <Button text="View Code" url={project.github} />
      </div>
    </div>
  </article>
)

const ProjectsCarousel = () => (
  <div class="flex flex-wrap">
    {projects.map(p => <Project project={p} />)}
  </div>
  // <Carousel plugins={['arrows']}>
  //   {projects.map(p => <Project project={p} />)}
  // </Carousel>
)

export const Projects = () => (
  <section id="projects" class="h-full">
    <div class="w-full flex flex-col items-center jutify-center">
      <h4>Stuff I've made</h4>
      <ProjectsCarousel />
    </div>
  </section>
)