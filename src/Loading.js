import React from 'react';
import { useFetchAPI } from './useFetchAPI';

const Loading = ({ pokemon }) => {
  const {
    hasError,
    isLoading,
    isResolved,
    data
  } = useFetchAPI(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (hasError) {
    return <p>Error!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isResolved) {
    return null;
  }

  const { name, types } = data;
  const skills = types.map(type => type.type.name).join(', ');

  return (
    <>
      <h1>Name: {name}</h1>
      <p>Skills: {skills}</p>
    </>
  )
};

export default Loading;
