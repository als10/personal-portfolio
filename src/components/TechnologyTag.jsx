import React from 'react';

function TechnologyTag({ item }) {
  return (
    <div className="text-sm sm:text-base p-2 m-1 rounded-lg hvr-hollow bg-gray-300 dark:bg-gray-700 dark:text-gray-300">
      {item}
    </div>
  );
}

export default TechnologyTag;
