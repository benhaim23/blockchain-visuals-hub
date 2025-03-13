
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, MinusCircle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const MUSIC_TRACKS = [
  {
    title: "Ambient Innovation",
    path: "/music/Ambient_innovation.mp3",
  },
  {
    title: "Digital Serenity",
    path: "/music/Digital_serenity.mp3",
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
        "fixed bottom-5 left-5 z-50 flex flex-col rounded-xl shadow-xl transition-all duration-300",
        isExpanded ? "w-72 p-5 bg-background/80 backdrop-blur-lg border border-border/50" : "w-14 h-14",
        theme === 'dark' ? 'shadow-primary/20' : 'shadow-primary/10'
      )}
    >
      {isExpanded ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Music size={16} className="text-primary" />
              <h3 className="text-sm font-medium truncate">
                {currentTrack.title}
              </h3>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground rounded-full p-1 hover:bg-secondary/80 transition-colors"
              aria-label="Minimize music player"
            >
              <MinusCircle size={16} />
            </button>
          </div>
          
          <div className="flex gap-2 mb-4">
            {MUSIC_TRACKS.map((track, index) => (
              <button
                key={index}
                onClick={() => changeTrack(index)}
                className={cn(
                  "text-xs px-3 py-1.5 rounded-full transition-all duration-200",
                  currentTrackIndex === index 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {track.title}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 mb-1">
            <button
              onClick={togglePlay}
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center transition-all duration-200",
                isPlaying 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
            </button>
            
            <button
              onClick={toggleMute}
              className={cn(
                "text-muted-foreground hover:text-foreground rounded-full p-1.5 hover:bg-secondary/80 transition-colors",
                isMuted && "text-destructive hover:text-destructive/80"
              )}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            
            <div className="flex-1">
              <Slider
                value={[volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="h-2"
              />
            </div>
          </div>
          
          {isPlaying && (
            <div className="flex justify-center gap-0.5 h-4 mt-2">
              {Array(4).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className="equalizer-bar" 
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    height: '8px'
                  }} 
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className={cn(
            "w-full h-full flex items-center justify-center rounded-xl hover:bg-primary/10 transition-colors",
            "bg-background/80 backdrop-blur-lg border border-border/50"
          )}
          aria-label="Open music player"
        >
          <div className={cn(
            "relative",
            isPlaying ? "animate-pulse" : ""
          )}>
            <Music size={20} className={cn(
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
