import React from 'react';
import Queries from './Queries';
import Form from './Form';
import Loading from './Loading';

const App = () => {
  return (
    <>
      <Queries />
      <Form />
      <Loading pokemon="charmander" />
    </>
  )
};

export default App;
