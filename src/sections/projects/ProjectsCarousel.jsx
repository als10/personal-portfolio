import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/slick-override.css';
import Project from './Project';

function Arrow({ onClick, direction }) {
  return (
    <button
      className={`absolute z-10 top-1/2 ${direction === 'right' ? '-right-16' : '-left-16'}`}
      onClick={onClick}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-gray-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === 'right' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
        />
      </svg>
    </button>
  );
}

function ProjectsCarousel() {
  const [projects, setProjects] = useState(null);

  const data = useStaticQuery(graphql`
        query {
          allMdx(filter: {frontmatter: {type: {eq: "Project"}}}) {
            nodes {
              frontmatter {
                rank
                stack
                name
                github
                link
                date
                img {
                    publicURL
                }
              }
              id
              body
            }
          }
        }
    `);

  useEffect(() => {
    const parsedProjects = data.allMdx.nodes.map((p) => (
      {
        id: p.id,
        rank: p.frontmatter.rank,
        name: p.frontmatter.name,
        body: p.body,
        date: p.frontmatter.date,
        stack: p.frontmatter.stack,
        github: p.frontmatter.github,
        link: p.frontmatter.link,
        img: p.frontmatter.img ? p.frontmatter.img.publicURL : undefined,
      }
    )).sort((a, b) => b.rank - a.rank);

    // console.log(data);

    setProjects(parsedProjects);
  }, [data.allMdx.nodes]);

  if (projects) {
    return (
      <div className="relative w-full md:w-5/6 2xl:w-2/3 h-full my-4 mx-auto">
        <Slider
          infinite
          lazyLoad
          speed={300}
          slidesToShow={1}
          centerMode
          centerPadding={0}
          nextArrow={<Arrow direction="right" />}
          prevArrow={<Arrow direction="left" />}
          dots
          swipeToSlide
          autoplaySpeed={5000}
        >
          {projects.map((p) => <Project key={p.id} project={p} />)}
        </Slider>
      </div>
    );
  }
}

export default ProjectsCarousel;
