import React from "react"
import skills from "../../content/skills.json"

const Skill = ({skill}) => (
    <div class="flex flex-col items-center">
        <div class="h-8 sm:h-16 w-8 sm:w-16 bg-white rounded-lg mb-4"/>
        <div class="text-center">{skill}</div>
    </div>
)

const Skillset = ({skillset}) => (
    <div class="mx-auto my-4 p-8 sm:p-16 bg-gray-200 dark:bg-gray-800 rounded-lg w-full sm:w-4/5">
        <h5 class="mb-8">{skillset.type}</h5>
        <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {skillset.technologies.map(t => <Skill skill={t}/>)}
        </div>
    </div>
)

export const Skills = () => (
    <section
        id="skills"
        class="flex-col h-full"
    >
        <h4>What do I know</h4>
        {skills.map(s => <Skillset skillset={s}/>)}
    </section>
)
