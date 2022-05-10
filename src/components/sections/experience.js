import React, {useState, useEffect} from "react"
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
                class={`experience-btn hvr-sweep-to-right text-sm sm:text-base text-left p-2 sm:p-4 rounded-md ${selected ? "bg-gray-600 text-white" : ""}`}
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
    <div class="lg:w-3/5 xl:w-2/3 transition duration-500">
        <div class="mb-4 space-y-2">
            <div class="flex flex-wrap space-x-2">
                <h5>{experience.role}</h5>
                <h6>@<a class="ml-2 underline" href={experience.website || '#'} target="_blank">{experience.company}</a></h6>
            </div>
            <div class="lg:text-xl font-light italic">{experience.duration}</div>
        </div>
        <MDXRenderer>{experience.description}</MDXRenderer>
    </div>
)

export default () => {
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [experiences, setExperiences] = useState(null)
    const [timeline, setTimeline] = useState(null)

    const data = useStaticQuery(graphql`
        query {
          allMdx(filter: {frontmatter: {type: {eq: "Experience"}}}) {
            nodes {
              id
              body
              frontmatter {
                rank
                company
                duration
                role
                yearStart
                website
              }
            }
          }
        }
    `)

    useEffect(() => {
        const experiencesList = data.allMdx.nodes.map(e => ({
            id: e.id,
            rank: e.frontmatter.rank,
            role: e.frontmatter.role,
            company: e.frontmatter.company,
            yearStart: e.frontmatter.yearStart,
            duration: e.frontmatter.duration,
            website: e.frontmatter.website,
            description: e.body,
        })).sort((a, b) => b.rank - a.rank)

        const currentYear = new Date().getFullYear()
        const earliestYear = experiencesList.reduce((prev, curr) => prev.yearStart > curr.yearStart ? curr : prev).yearStart

        let timelineList = []
        for (let year = currentYear; year >= earliestYear; year--) {
            timelineList.push({
                year: year,
                experiences: experiencesList.filter(e => e.yearStart === year)
            })
        }

        setSelectedExperience(experiencesList[0])
        setExperiences(experiencesList)
        setTimeline(timelineList)
    }, [])

    return (
        <>
            {experiences && timeline &&
                <section id="experience">
                    <div class="flex flex-col">
                        <h4 className="ml-auto">Where I've worked</h4>
                        <div class="flex flex-col lg:space-x-8 lg:flex-row items-center">
                            <Timeline
                                timeline={timeline}
                                selectedExperience={selectedExperience}
                                setExperience={setSelectedExperience}
                            />
                            <ExperienceDescription experience={selectedExperience}/>
                        </div>
                    </div>
                </section>}
        </>
    )
}