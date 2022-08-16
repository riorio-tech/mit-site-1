import { useAudio } from "./components/useAudio";
export const AudioPlayer = () => {
    const [playing, currentTime, play, pause, jump] = useAudio("/onikon.mp3");
  
    return (
      <>
        {/* <p>currenttime: {currentTime}</p> */}
  
        <button onClick={playing ? pause : play}>
          {playing ? "🟦Pause" : "🎧Play"}
        </button>
  
        {/* <button onClick={() => jump(30)}>30sec ▶︎</button> */}
      </>
    );
  };

  