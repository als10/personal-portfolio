import React from "react"

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'FullCircle',
    yearStart: 2021,
    duration: 'June to August 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus finibus quam, condimentum tincidunt erat pharetra ac. Nunc ante sapien, congue vitae felis nec, lobortis viverra augue. Integer vitae nibh vel nunc finibus placerat. Aliquam tincidunt magna eros, nec maximus neque accumsan eget. Etiam vitae convallis massa. Donec diam nulla, volutpat a rutrum nec, pulvinar sit amet neque. Donec eleifend ut magna varius condimentum. Morbi eu erat et dolor porta porttitor eget vitae mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ornare, risus id ornare sagittis, est augue convallis lectus, et aliquet magna arcu nec arcu. Donec at mollis metus. Aenean et mattis velit. Phasellus id enim magna.'
  },
  {
    role: 'Assistant Head Boy',
    company: 'Abu Dhabi Indian School',
    yearStart: 2019,
    duration: 'April 2019 to January 2020',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus finibus quam, condimentum tincidunt erat pharetra ac. Nunc ante sapien, congue vitae felis nec, lobortis viverra augue. Integer vitae nibh vel nunc finibus placerat. Aliquam tincidunt magna eros, nec maximus neque accumsan eget. Etiam vitae convallis massa. Donec diam nulla, volutpat a rutrum nec, pulvinar sit amet neque. Donec eleifend ut magna varius condimentum. Morbi eu erat et dolor porta porttitor eget vitae mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ornare, risus id ornare sagittis, est augue convallis lectus, et aliquet magna arcu nec arcu. Donec at mollis metus. Aenean et mattis velit. Phasellus id enim magna.'
  }
]

const currentYear = new Date().getFullYear()
const earliestYear = experiences.reduce((prev, curr) => prev.yearStart > curr.yearStart ? curr : prev).yearStart
const timeline = []
for (let year = currentYear; year >= earliestYear; year--) {
  timeline.push({
    year: year,
    experiences: experiences.filter(e => e.yearStart === year)
  })
}

const Event = ({ experience, year }) => (
  <>
    <div class="col-start-1 ml-auto text-gray-600">
      {year ?? ""}
    </div>
    <div class="col-start-2 col-span-1 m-auto bg-gray-800 shadow-xl w-5 h-1 rounded-full z-10"></div>
    <div class="col-start-3 col-span-3 mr-auto">
      {experience &&
      <button class="text-left p-2 rounded-md hover:bg-black hover:text-white">
        <div class="font-medium">{experience.company}</div>
        <div class="italic">{experience.role}</div>
      </button>}
    </div>
  </>
)

const Timeline = () => (
  <div class="relative grid grid-cols-5 w-1/3">
    <div class="col-start-2 col-span-1 mx-auto mb-2 text-gray-600">
      Present
    </div>
    <div class="col-start-2 col-span-1 mx-auto">
      <div class="border-w-1 absolute border-gray-700 h-full border"></div>
    </div>
    {timeline.map(({ year, experiences }) => 
      <>
        {experiences.map(e => <Event experience={e} />)}
        <Event year={year} />
      </>
    )}
  </div>
)

export const Experience = () => (
  <section class="md:h-screen px-10 pt-10 flex items-center">
    <div class="flex flex-col">
      <h4>Where I've worked</h4>
      <div class="flex items-center">
        <Timeline />
        <div class="ml-8 mr-32 w-2/3">
          <h5>{`${experiences[0].role} @ ${experiences[0].company}`}</h5>
          <div class="mb-2">{experiences[0].duration}</div>
          <p>{experiences[0].description}</p>
        </div>
      </div>
    </div>
  </section>
)