import { useEffect, useRef } from "react";

export const useSound = (isEnabled: boolean) => {
  const audioCache = useRef<{ [key: string]: HTMLAudioElement }>({});

  const preloadSound = (filePath: string) => {
    if (!audioCache.current[filePath]) {
      const audio = new Audio(filePath);
      audio.load(); // Preload the audio to remove most delay
      audioCache.current[filePath] = audio;
    }
  };

  const playSound = (filePath: string) => {
    if (isEnabled && audioCache.current[filePath]) {
      const audio = audioCache.current[filePath];
      audio.currentTime = 0; // Rewind to the start
      audio.play();
    }
  };

  useEffect(() => {
    // Preload sounds when the component mounts
    preloadSound("/sounds/lessonfinish.mp3");
    preloadSound("/sounds/click.mp3");
    preloadSound("/sounds/yay.mp3");
    preloadSound("/sounds/wrongclick.mp3");

    return () => {
      // Clean up audio objects if necessary
      Object.values(audioCache.current).forEach((audio) => audio.remove());
    };
  }, []);

  return playSound;
};
