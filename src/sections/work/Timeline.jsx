import React from 'react';

function Timeline({ timeline }) {
  return (
    <div className="relative grid grid-cols-10 mb-16 w-full content-center">
      <div className="col-start-2 mx-auto mb-2 text-gray-600 dark:text-gray-400">
        Present
      </div>
      <div className="col-start-2 mx-auto">
        <div className="border-w-1 absolute border-gray-700 dark:border-gray-300 h-full border" />
      </div>
      {timeline}
    </div>
  );
}

export default Timeline;
