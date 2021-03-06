import React from "react"
import skills from "../../../content/skills"

const Skill = ({skill}) => (
    <div class="hvr-bounce-in flex flex-col items-center">
        <img
            class="p-2 h-8 sm:h-16 w-8 sm:w-16 bg-white rounded-lg mb-4"
            src={skill.logo}
        />
        <div class="text-sm sm:text-base lg:text-md text-center">{skill.name}</div>
    </div>
)

const Skillset = ({skillset}) => (
    <div class="mx-auto my-8 rounded-lg w-full sm:w-4/5">
        <h5 class="mb-8">{skillset.type}</h5>
        <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {skillset.technologies.map(t => <Skill skill={t}/>)}
        </div>
    </div>
)

export default () => (
    <section
        id="skills"
        class="flex-col"
    >
        <h4>What I know</h4>
        {skills.map(s => <Skillset skillset={s}/>)}
    </section>
)
