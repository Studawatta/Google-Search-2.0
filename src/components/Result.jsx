import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';
const Result = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults('/search?q=cricket&num=10');
  }, []);
  console.log(results);
  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div>
              <p>{link}</p>
            </div>
          ))}
        </div>
      );
    case '/images':
      return 'IMAGES';
    case '/news':
      return 'NEWS';
    case '/videos':
      return 'videos';

    default:
      return 'ERROR';
  }
};

export default Result;
