import * as React from "react"

const skills = [
  {
    type: "Frontend",
    technologies: [
      "ReactJS",
      "GatsbyJS",
      "Flutter",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SASS"
    ]
  },
  {
    type: "Backend",
    technologies: [
      "NodeJS",
      "Express",
      "MongoDB",
      "Django",
      "MySQL"
    ]
  },
  {
    type: "Miscellaneous",
    technologies: [
      "Figma",
      "Unity",
      "Android Studio",
      "Java",
      "Python"
    ]
  }
]

const Skill = ({ skill }) => (
  <div class="flex flex-col items-center">
    <div class="h-16 w-16 bg-white rounded-lg mb-4"></div>
    <div class="text-center">{skill}</div>
  </div>
)

const Skillset = ({ skillset }) => (
  <div class="mx-auto mt-12 p-16 bg-gray-200 dark:bg-gray-800 rounded-lg w-4/5">
      <h5 class="mb-8">{skillset.type}</h5>
      <div class="grid grid-cols-8 gap-4">
        {skillset.technologies.map(t => <Skill skill={t} />)}
      </div>
  </div>
)

export const Skills = () => (
  <section
    id="skills"
    class="flex-col h-full"
  >
    <h4>What do I know</h4>
    {skills.map(s => <Skillset skillset={s} />)}
  </section>
)
