import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface Track {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  audioUrl: string;
  genre: string;
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Midnight Dreams",
    description: "Electronic",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    genre: "Electronic",
  },
  {
    id: "2",
    title: "Urban Flow",
    description: "Hip-Hop",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    genre: "Hip-Hop",
  },
  {
    id: "3",
    title: "Summer Vibes",
    description: "Pop",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    genre: "Pop",
  },
  {
    id: "4",
    title: "Neon Lights",
    description: "Electronic",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    genre: "Electronic",
  },
  {
    id: "5",
    title: "City Nights",
    description: "Hip-Hop",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    genre: "Hip-Hop",
  },
  {
    id: "6",
    title: "Ocean Breeze",
    description: "Pop",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    genre: "Pop",
  },
  {
    id: "7",
    title: "Digital Dreams",
    description: "Electronic",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    genre: "Electronic",
  },
  {
    id: "8",
    title: "Street Beats",
    description: "Hip-Hop",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    genre: "Hip-Hop",
  },
  {
    id: "9",
    title: "Sunset Groove",
    description: "Pop",
    coverImage: "/placeholder-cover.jpg",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    genre: "Pop",
  },
];

interface WaveformProps {
  isPlaying?: boolean;
}

const Waveform = ({ isPlaying = false }: WaveformProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f3f3f,
        backgroundColor: 0x0,
        points: 20.00,
        maxDistance: 15.00,
        spacing: 10.00,
        showDots: true,
        showLines: true,
        lineColor: 0x3f3f3f,
        dotColor: 0x3f3f3f,
        lineWidth: 1.00,
        pointSize: 2.00,
        rotationSpeed: 0.5,
        animationSpeed: 1.0
      });
    }

    // Update effect when playing state changes
    if (vantaEffect.current) {
      vantaEffect.current.setOptions({
        rotationSpeed: isPlaying ? 1.5 : 0.5,
        animationSpeed: isPlaying ? 2.0 : 1.0,
        maxDistance: isPlaying ? 25.00 : 15.00,
        spacing: isPlaying ? 15.00 : 10.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [isPlaying]);

  return (
    <div 
      ref={vantaRef} 
      className="w-full h-24 rounded-lg overflow-hidden transition-all duration-300"
      style={{ 
        opacity: isPlaying ? 1 : 0.5,
        transform: isPlaying ? 'scale(1.02)' : 'scale(1)'
      }}
    />
  );
};

export function MusicPortfolio() {
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (trackId: string) => {
    if (currentTrack === trackId) {
      // Toggle play/pause for current track
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Stop current track and play new one
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      const track = tracks.find(t => t.id === trackId);
      if (track) {
        const audio = new Audio(track.audioUrl);
        audioRef.current = audio;
        audio.play();
        setCurrentTrack(trackId);
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="music" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Music</h2>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tracks.map((track) => (
            <Card key={track.id} className="overflow-hidden hover:scale-105 transition-transform duration-200">
              <CardHeader className="p-2">
                <img
                  src={track.coverImage}
                  alt={track.title}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="p-3">
                <CardTitle className="text-sm font-semibold">{track.title}</CardTitle>
                <CardDescription className="text-xs mb-2">{track.genre}</CardDescription>
                <Waveform isPlaying={currentTrack === track.id && isPlaying} />
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={() => handlePlayPause(track.id)}
                  >
                    {currentTrack === track.id && isPlaying ? (
                      <Pause className="h-3 w-3" />
                    ) : (
                      <Play className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 