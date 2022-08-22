import React, { useState, useEffect, useRef } from 'react';
import { useAudio } from "./components/useAudio";
import * as s from "./styles/globalStyles";

export const AudioPlayer = () => {
    const [playing, currentTime, play, pause, jump] = useAudio("/onikon.mp3");
    const ref = useRef(null);
    const percentage = (1 - ((160 - currentTime) / 160)) * 100;
    const adjustPercentage = 100 < percentage ? 100 : percentage;
    return (
      <>
        {/* <p>currenttime: {currentTime}</p> */}
        <div ref={ref}>
            <div className="progress-bar-container">
                <div style={{width: `${adjustPercentage}%`}}></div>
            </div>
        </div>
        <s.SpacerXSmall />

        <button onClick={playing ? pause : play}>
          {playing ? "　再生中 ♪　" : "　🎧 Play　"}
        </button>
  
        {/* <button onClick={() => jump(150)}>30sec ▶︎</button> */}
      </>
    );
  };

  