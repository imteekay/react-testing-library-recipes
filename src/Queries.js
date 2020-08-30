import React, { useState } from 'react';

const Queries = () => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isImagesVisible, setIsImagesVisible] = useState(false);

  return (
    <>
      <h1>Title</h1>

      <hr />

      <ul>
        <li data-testid="list-item">Item 1</li>
        <li data-testid="list-item">Item 2</li>
        <li data-testid="list-item">Item 3</li>
        <li data-testid="list-item">Item 4</li>
      </ul>

      <hr />

      <button onClick={() => setIsParagraphVisible(true)}>Show paragraph</button>
      {isParagraphVisible ? <p>A paragraph</p> : null}

      <button onClick={() => setIsImagesVisible(true)}>Show images</button>
      {isImagesVisible ? <>
        <img src="" />
        <img src="" />
        <img src="" />
        <img src="" />
      </> : null}
    </>
  )
};

export default Queries;
