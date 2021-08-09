import React, {useState} from "react"
import {graphql, useStaticQuery} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

const Event = ({experience, year, selected, setExperience}) => (
    <>
        <div class="col-start-1 ml-auto text-gray-600 dark:text-gray-400">
            {year ?? ""}
        </div>
        <div class="col-start-2 m-auto bg-gray-800 dark:bg-gray-300 shadow-xl w-5 h-1 rounded-full z-10"/>
        <div class="col-start-3 col-span-3 mr-auto">
            {experience &&
            <button
                class={`text-sm sm:text-base text-left p-2 sm:p-4 rounded-md hover:bg-gray-600 hover:text-white ${selected ? "bg-gray-600 text-white" : ""}`}
                onClick={() => setExperience(experience)}>
                <div class="font-medium">{experience.company}</div>
                <div class="hidden sm:block italic">{experience.role}</div>
            </button>}
        </div>
    </>
)

const Timeline = ({timeline, selectedExperience, setExperience}) => (
    <div class="relative grid grid-cols-5 mb-16 lg:2/5 xl:w-1/3">
        <div class="col-start-2 mx-auto mb-2 text-gray-600 dark:text-gray-400">
            Present
        </div>
        <div class="col-start-2 mx-auto">
            <div class="border-w-1 absolute border-gray-700 dark:border-gray-300 h-full border"/>
        </div>
        {timeline.map(({year, experiences}) =>
            <>
                {experiences.map(e => <Event experience={e} selected={selectedExperience === e}
                                             setExperience={setExperience}/>)}
                <Event year={year}/>
            </>
        )}
    </div>
)

const ExperienceDescription = ({experience}) => (
    <div class="lg:w-3/5 xl:w-2/3">
        <div class="mb-4 space-y-2">
            <div class="flex flex-wrap space-x-2">
                <h5>{experience.role}</h5>
                <h6>{`@ ${experience.company}`}</h6>
            </div>
            <div class="lg:text-xl font-light">{experience.duration}</div>
        </div>
        <MDXRenderer>{experience.description}</MDXRenderer>
    </div>
)

export default () => {
    const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {frontmatter: {type: {eq: "Experience"}}}) {
        nodes {
          id
          body
          frontmatter {
            company
            duration
            role
            yearStart
          }
        }
      }
    }
`)

    const experiences = data.allMdx.nodes.map(e => ({
        id: e.id,
        role: e.frontmatter.role,
        company: e.frontmatter.company,
        yearStart: e.frontmatter.yearStart,
        duration: e.frontmatter.duration,
        description: e.body,
    }))

    const currentYear = new Date().getFullYear()
    const earliestYear = experiences.reduce((prev, curr) => prev.yearStart > curr.yearStart ? curr : prev).yearStart

    let timeline = []
    for (let year = currentYear; year >= earliestYear; year--) {
        timeline.push({
            year: year,
            experiences: experiences.filter(e => e.yearStart === year)
        })
    }

    const [experience, setExperience] = useState(experiences[0])

    return (
        <section id="experience">
            <div class="flex flex-col">
                <h4>Where I've worked</h4>
                <div class="flex flex-col lg:space-x-8 lg:flex-row items-center">
                    <Timeline
                        timeline={timeline}
                        selectedExperience={experience}
                        setExperience={setExperience}
                    />
                    <ExperienceDescription experience={experience}/>
                </div>
            </div>
        </section>
    )
}