import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Timeline from './Timeline';
import Event from './Event';

function Work() {
  const [timeline, setTimeline] = useState(null);

  const data = useStaticQuery(graphql`
        query {
          allMdx(filter: {frontmatter: {type: {eq: "Work"}}}) {
            nodes {
              id
              body
              frontmatter {
                rank
                company
                role
                monthStart
                yearStart
                monthEnd
                yearEnd
                website
                stack
              }
            }
          }
        }
    `);

  useEffect(() => {
    const experiencesList = data.allMdx.nodes.map((e) => ({
      id: e.id,
      rank: e.frontmatter.rank,
      role: e.frontmatter.role,
      company: e.frontmatter.company,
      monthStart: e.frontmatter.monthStart,
      yearStart: e.frontmatter.yearStart,
      monthEnd: e.frontmatter.monthEnd,
      yearEnd: e.frontmatter.yearEnd,
      website: e.frontmatter.website,
      stack: e.frontmatter.stack,
      description: e.body,
    })).sort((a, b) => {
      if (!a.yearEnd) return a;
      if (!b.yearEnd) return b;
      if (a.yearEnd === b.yearEnd) return b.monthEnd - a.monthEnd;
      return b.yearEnd - a.yearEnd;
    });

    const currentYear = new Date().getFullYear();
    const earliestYear = experiencesList.reduce((prev, curr) => (
      prev.yearStart > curr.yearStart ? curr : prev
    )).yearStart;

    const timelineList = [];

    const presentExperiences = experiencesList.filter((e) => !e.yearEnd);
    presentExperiences.forEach((e) => {
      timelineList.push(<Event key={e.rank} experience={e} />);
      timelineList.push(<Event key={`${e.yearStart}-${e.monthStart}`} month={e.monthStart} />);
    });

    for (let year = currentYear; year >= earliestYear; year -= 1) {
      const experiencesDuringYear = experiencesList.filter((e) => e.yearEnd === year);
      const firstExperienceOfYear = experiencesDuringYear.pop();
      experiencesDuringYear.forEach((e) => {
        timelineList.push(<Event key={`${e.yearEnd}-${e.monthEnd}`} month={e.monthEnd} />);
        timelineList.push(<Event key={`${e.rank}`} experience={e} />);
        timelineList.push(<Event key={`${e.yearStart}-${e.monthStart}`} month={e.monthStart} />);
      });
      if (firstExperienceOfYear) {
        timelineList.push(
          <Event
            key={`${firstExperienceOfYear.yearEnd}-${firstExperienceOfYear.monthEnd}`}
            month={firstExperienceOfYear.monthEnd}
          />,
        );
        timelineList.push(
          <Event
            key={firstExperienceOfYear.rank}
            experience={firstExperienceOfYear}
          />,
        );
        let pushYearAfter = true;
        while (year !== firstExperienceOfYear.yearStart) {
          timelineList.push(<Event key={year} year={year} />);
          year -= 1;
          pushYearAfter = false;
        }
        timelineList.push(
          <Event
            key={`${firstExperienceOfYear.yearStart}-${firstExperienceOfYear.monthStart}`}
            month={firstExperienceOfYear.monthStart}
          />,
        );
        if (pushYearAfter) timelineList.push(<Event key={year} year={year} />);
        else year += 1;
      }
    }

    setTimeline(timelineList);
  }, [data.allMdx.nodes]);

  if (timeline) {
    return (
      <section id="work" className="w-full sm:w-4/5 md:w-2/3 mx-auto">
        <div className="flex flex-col space-y-16 items-center">
          <h4>Where I&apos;ve Worked</h4>
          <Timeline timeline={timeline} />
        </div>
      </section>
    );
  }
}

export default Work;
