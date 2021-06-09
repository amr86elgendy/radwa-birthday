import React, { useEffect, useState } from "react";
import data from "./data";


function App() {
  const [isFlip, setIsFlip] = useState(null);
  const [array, setArray] = useState([])
  
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
  }
 
  useEffect(() => {

    setArray(shuffle(data))
    
  }, [])
  return (
    <>
      <h1 className="title head-1">Happy Birthday</h1>
      <h1 className="title head-2">Dr. Radwa Elmoneer</h1>
      <div className="container">
        {array && array.map((p, i) => (
          <div
            key={i}
            className={isFlip === i ? "card flip" : "card"}
            onClick={() => setIsFlip(i)}
          >
            <div className="face front">
              <img src={p.cover} alt="cover" />
            </div>
            <div className="face back">
              {!p.image && <p className="text">{p.from}</p>}
              {p.image && <img src={p.image} alt={p.from} className='image' />}
              {p.audio && <audio src={p.audio} type='audio/ogg' muted={isFlip !== i} controls></audio>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
