import React from 'react';
import Marker from '../../components/Marker';
import TechnologyTag from '../../components/TechnologyTag';

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function Year({ year }) {
  return (
    <div className="col-start-1 ml-auto text-gray-600 font-bold dark:text-gray-400 my-4">
      {year}
    </div>
  );
}

function Month({ month }) {
  return (
    <div className="col-start-1 ml-auto text-gray-600 dark:text-gray-400">
      {MONTH_NAMES[month - 1]}
    </div>
  );
}

function ExperienceDescription({ experience }) {
  return (
    <div className="col-start-3 col-span-8">
      <div className="mb-4 space-y-2">
        <div className="flex flex-wrap items-end space-x-2">
          <h6 className="font-medium">{experience.role}</h6>
          <h6>
            at
            <a
              className="ml-2 underline"
              href={experience.website || '#'}
              target="_blank"
              rel="noreferrer"
            >
              {experience.company}
            </a>
          </h6>
        </div>
        <div className="lg:text-xl font-light italic">{experience.duration}</div>
      </div>
      <div>{experience.description}</div>
      <div className="mt-4 flex flex-wrap">
        {experience.stack.map((t) => <TechnologyTag key={t} item={t} />)}
      </div>
    </div>
  );
}

function Event({ year, month, experience }) {
  if (experience) {
    return (
      <>
        <div className="col-start-1" />
        <div className="col-start-2" />
        <ExperienceDescription experience={experience} />
      </>
    );
  }

  return (
    <>
      {year && <Year year={year} />}
      {month && <Month month={month} />}
      <Marker />
      <div className="col-start-3 col-span-3" />
    </>
  );
}

export default Event;
