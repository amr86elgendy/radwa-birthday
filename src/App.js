import React, { useState } from 'react';
import data from './data';

function App() {
  const [isFlip, setIsFlip] = useState(null);
  return (
    <>
    <h1 className='title'>Happy Birthday DR/ Radwa-Elmoneir</h1>
    <div className='container'>
      {data.map((p, i) => (
        <div
          key={i}
          className={isFlip === i ? 'card flip' : 'card'}
          onClick={() => setIsFlip(i)}
        >
          <div className='face front'>
            <img src={p.image} alt="cover" />
          </div>
          <div className='face back'>
            {/* <p className='text'>{p.text}</p> */}
            {/* <p>From : {p.from}</p> */}
            <audio src={p.src} controls></audio>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
