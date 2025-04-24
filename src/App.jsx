import React, { useState, useEffect } from 'react';
import './App.css';
import MusicPlayer from './components/MusicPlayer';
import TrackList from './components/TrackList';
import { mockTracks } from './data/mockTracks';
import HeaderMain from './components/Header';

const App = () => {
    const [tracks, setTracks] = useState(mockTracks);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [filteredTracks, setFilteredTracks] = useState(mockTracks);
    const [showTracklist, setShowTracklist] = useState(true);

    // Select first track by default when app loads
    useEffect(() => {
        if (mockTracks.length > 0 && !currentTrack) {
            setCurrentTrack(mockTracks[0]);
        }
    }, []);

    const handleSelectTrack = (track) => {
        setCurrentTrack(track);
    };


    const toggleTracklist = () => {
        setShowTracklist(!showTracklist);
    };

    return (
        <div className="">
            <div className="min-h-screen py-12 px-4" id='app'>
                <HeaderMain />
                <div className="max-w-5xl mx-auto mt-12">
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-white mb-2">Indigo Music</h1>
                        <p className="text-indigo-300">Your favorite tunes, anytime, anywhere.</p>
                    </header>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id='main'>

                        {showTracklist && (
                            <div className="order-2 md:order-1">
                                <TrackList
                                    tracks={filteredTracks}
                                    onSelectTrack={handleSelectTrack}
                                    currentTrackId={currentTrack?.id}
                                />
                            </div>
                        )}

                        <div className={`order-1 md:order-2 ${!showTracklist ? 'md:col-span-2 mx-auto' : ''}`}>
                            <MusicPlayer currentTrack={currentTrack} />
                        </div>
                    </div>


                    <button
                        onClick={toggleTracklist}
                        className="ml-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors flex items-center"
                    >
                        {showTracklist ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                Hide List
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                Show List
                            </>
                        )}
                    </button>

                    <footer className="mt-16 text-center text-indigo-400 text-sm">
                        <p>© {new Date().getFullYear()} Indigo Music. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default App;