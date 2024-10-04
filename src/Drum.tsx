import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
}
const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (clip: AudioClip) => {
    const audio = document.getElementById(clip.keyTrigger) as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
  };

  return (
    <button
      className="drum-pad"
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio
        src={audioClip.url}
        id={audioClip.keyTrigger}
        className="clip"
        preload="auto"
      ></audio>
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
