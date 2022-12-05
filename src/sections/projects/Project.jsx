import React from 'react';
import TechnologyTag from '../../components/TechnologyTag';

function LinkButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-gray-100 outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
      Visit Project
    </a>
  );
}

function GithubButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center rounded-xl bg-gray-600 hover:bg-gray-500 px-3 py-2 text-gray-100 outline-none"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-5 w-5 fill-white"
      >
        <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
      </svg>
      View Code
    </a>
  );
}

function Project({ project }) {
  return (
    <article
      className="m-auto h-full w-full flex flex-col space-x-8 lg:flex-row p-8 rounded-xl items-center justify-center"
    >
      {project.img && (
        <div className="w-full lg:w-1/2">
          <img
            className="hidden md:block mx-auto mb-8 rounded-lg w-full"
            alt={`${project.name} demo`}
            src={project.img}
          />
        </div>
      )}
      <div className="w-full lg:w-1/2">
        <div className="mb-4">
          <h5>{project.name}</h5>
          <div className="text-gray-700 dark:text-gray-300">{project.date}</div>
        </div>
        <div>
          {project.body}
        </div>
        <div className="mt-6">
          <div className="mb-2 flex flex-wrap">
            {project.stack.map((t) => <TechnologyTag key={t} item={t} />)}
          </div>
          <div className="flex flex-col md:flex-row flex-wrap space-y-2 md:space-x-2">
            {project.link && <LinkButton url={project.link} />}
            {project.github && <GithubButton url={project.github} />}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
