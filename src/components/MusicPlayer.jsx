import React, { useState, useRef } from 'react';
import './styles.css';

const MusicPlayer = ({ currentTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="text-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto" id="music-player">
      {currentTrack ? (
        <>
          <div className="mb-4">
            <img 
              src={currentTrack.coverArt || "https://via.placeholder.com/300?text=No+Cover"} 
              alt={`${currentTrack.title} cover`} 
              className="w-full h-64 object-cover rounded-md shadow-md mb-3"
            />
            <h2 className="text-xl font-bold">{currentTrack.title}</h2>
            <p className="text-gray-200">{currentTrack.artist}</p>
          </div>
          
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleProgressChange}
              className="w-full h-2 bg-indigo-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm mt-1 text-gray-200">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
              </svg>
            </button>
            
            <button 
              onClick={handlePlayPause}
              className="p-4 rounded-full bg-gray-500 hover:bg-gray-400 text-white"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            
            <button className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
              </svg>
            </button>

            <button 
              onClick={toggleLoop} 
              className={`p-2 rounded-full ${isLooping ? 'bg-indigo-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
              title={isLooping ? "Disable loop" : "Enable loop"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
                    
          <audio
            ref={audioRef}
            src={currentTrack.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            loop={isLooping}
          />
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl">No track selected</p>
          <p className="text-gray-300 mt-2">Select a track to play</p>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;