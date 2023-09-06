import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // /videos, /search, /images

  const getResults = async (type) => {
    setIsLoading(true);
    console.log(`${baseUrl} ${type}`);
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5f7d83597emsh74ad0a9fb2cb64ep1a8896jsn60dc0c3b7997',
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
      },
    });
    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
