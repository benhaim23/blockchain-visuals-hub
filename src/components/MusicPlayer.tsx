
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const MUSIC_TRACKS = [
  {
    title: "Ambient Innovation",
    path: "/music/ambient-innovation.mp3",
  },
  {
    title: "Digital Serenity",
    path: "/music/digital-serenity.mp3",
  },
  {
    title: "Blockchain Harmony",
    path: "/music/blockchain-harmony.mp3",
  }
];

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { theme } = useTheme();

  const currentTrack = MUSIC_TRACKS[currentTrackIndex];

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(currentTrack.path);
    audioRef.current.volume = volume / 100;
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newValue: number[]) => {
    const newVolume = newValue[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const changeTrack = (index: number) => {
    const wasPlaying = isPlaying;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrackIndex(index);
    setIsPlaying(false);
    
    // Need to recreate the audio element with the new source
    setTimeout(() => {
      if (wasPlaying && audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Error playing new track:", error);
        });
        setIsPlaying(true);
      }
    }, 50);
  };

  return (
    <div 
      className={cn(
        "fixed bottom-4 left-4 z-50 flex flex-col rounded-lg shadow-lg transition-all duration-300 glass",
        isExpanded ? "w-64 p-4" : "w-12 h-12"
      )}
    >
      {isExpanded ? (
        <>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium truncate">
              {currentTrack.title}
            </h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">Collapse</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex gap-2 mb-3 flex-wrap">
            {MUSIC_TRACKS.map((track, index) => (
              <button
                key={index}
                onClick={() => changeTrack(index)}
                className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  currentTrackIndex === index 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {track.title}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={togglePlay}
              className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <button
              onClick={toggleMute}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            
            <div className="flex-1">
              <Slider
                value={[volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="h-1.5"
              />
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full h-full flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors"
          aria-label="Open music player"
        >
          <div className={cn(
            "relative",
            isPlaying ? "animate-pulse" : ""
          )}>
            <Volume2 size={20} className={cn(
              "text-foreground transition-opacity",
              isPlaying ? "opacity-100" : "opacity-70"
            )} />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;
