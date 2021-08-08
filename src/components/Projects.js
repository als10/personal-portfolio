import {graphql} from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {StaticImage} from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HighlightedText = ({style, children}) => (
    <div class={`text-sm sm:text-base p-2 m-1 rounded-lg ${style ?? ""}`}>
        {children}
    </div>
)

const Button = ({text, url}) => (
    <HighlightedText style="xl:p-4 bg-gray-600 text-white hover:bg-white hover:text-black hover:border-black">
        <a href={url} target="_blank">{text}</a>
    </HighlightedText>
)

const Technology = ({item}) => (
    <HighlightedText style="bg-white dark:text-gray-800">
        {item}
    </HighlightedText>
)

const Project = ({project}) => (
    <article
        class="h-full xl:flex xl:space-x-12 bg-gray-200 dark:bg-gray-800 p-8 md:p-12 lg:p-16 rounded-xl items-center justify-center">
        <StaticImage
            class="hidden sm:block mx-auto mb-8 xl:mt-8 w-4/5 xl:w-1/2 rounded-lg"
            alt="project demo"
            src="../images/placeholder_image.png"
        />
        <div class="relative h-96 sm:h-72 lg:h-60 xl:h-80 xl:w-1/2">
            <div class="absolute top-0">
                <h5 class="mb-4">{project.frontmatter.name}</h5>
                <div class="italic">{project.frontmatter.date}</div>
                <MDXRenderer>{project.body}</MDXRenderer>
            </div>
            <div class="absolute bottom-0">
                <div class="mb-2 flex flex-wrap">
                    {project.frontmatter.stack.map(e => <Technology item={e}/>)}
                </div>
                <div class="flex flex-wrap">
                    {project.frontmatter.link && <Button text="Visit Project" url={project.frontmatter.link}/>}
                    {project.frontmatter.github && <Button text="View Code" url={project.frontmatter.github}/>}
                </div>
            </div>
        </div>
    </article>
)

const ProjectsCarousel = ({projects}) => {
    const Arrow = ({onClick, direction}) => (
        <button onClick={onClick} class={`absolute z-10 top-1/2 ${direction === 'right' ? "-right-16" : "-left-16"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black dark:text-white" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={direction === 'right' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}/>
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
        nextArrow: <Arrow direction="right"/>,
        prevArrow: <Arrow direction="left"/>,
        dots: true,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 5000,
        adaptiveHeight: false,
    }

    return <div class="relative w-5/6 h-full my-4 mx-auto">
        <Slider {...settings}>
            {projects.map(p => <Project key={p.id} project={p}/>)}
        </Slider>
    </div>
}

export const query = graphql`
    query {
      allMdx(filter: {frontmatter: {type: {eq: "Project"}}}) {
        nodes {
          frontmatter {
            stack
            name
            github
            link
            date
          }
          id
          body
        }
      }
    }
`

export default ({data}) => (
    <section id="projects" class="h-full xl:h-screen">
        <div class="w-full flex flex-col items-center justify-center">
            <h4>Stuff I've made</h4>
            <ProjectsCarousel projects={data.allMdx.nodes}/>
        </div>
    </section>
)