import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const HighlightedText = ({style, children}) => (
    <div class={`text-sm sm:text-base p-2 m-1 rounded-lg ${style ?? ""}`}>
        {children}
    </div>
)

const Button = ({text, url}) => (
    <HighlightedText style="xl:p-4 bg-black text-white hover:bg-white hover:text-black hover:border-black">
        <Link to={url}>{text}</Link>
    </HighlightedText>
)

const Technology = ({item}) => (
    <HighlightedText style="bg-white dark:text-gray-800">
        {item}
    </HighlightedText>
)

const Project = ({project}) => (
    <article
        class="xl:flex xl:space-x-12 bg-gray-200 dark:bg-gray-800 p-8 md:p-12 lg:p-16 rounded-xl items-center justify-center">
        <StaticImage
            class="hidden sm:block mx-auto mb-8 xl:mt-8 w-4/5 xl:w-1/2 rounded-lg"
            alt="project demo"
            src="../images/placeholder_image.png"
        />
        <div class="pr-8 md:pr-16 xl:w-1/2">
            <h5 class="mb-4">{project.title}</h5>
            <p class="mb-8">{project.description}</p>
            <div class="flex flex-wrap">
                {project.stack.map(e => <Technology item={e}/>)}
            </div>
            <div class="flex flex-wrap">
                <Button text="Visit Project" url={project.link}/>
                <Button text="View Code" url={project.github}/>
            </div>
        </div>
    </article>
)

const ProjectsCarousel = () => {
    const Arrow = ({ onClick, direction }) => (
        <button onClick={onClick} class={`absolute z-10 top-1/2 ${direction === 'right' ? "-right-16" : "-left-16"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={direction ==='right' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
            </svg>
        </button>
    )

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <Arrow direction="right" />,
        prevArrow: <Arrow direction="left" />,
        dots: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 5000,
        adaptiveHeight: false,
    }

    return <div class="relative w-5/6 h-full my-4 mx-auto">
        <Slider {...settings}>
            {projects.map(p => <Project project={p}/>)}
        </Slider>
    </div>
}

export const Projects = () => (
    <section id="projects" class="h-full xl:h-screen">
        <div class="w-full flex flex-col items-center justify-center">
            <h4>Stuff I've made</h4>
            <ProjectsCarousel/>
        </div>
    </section>
)