import React, { useState } from 'react';
import img from './images/cover.png';
import data from './data';
// import aud from './images/mixkit-fast-small-sweep-transition-166.wav'

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
          <div className=''></div>
          <div className='face front'>
            <div className="number"></div>
            <img src={img} alt="camera" />
          </div>
          <div className='face back'>
            <p className='text'>{p.text}</p>
            <p>From : {p.from}</p>
            <audio src={p.src} controls></audio>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default App;
