import React from 'react';
import './styles.css';

const TrackList = ({ tracks, onSelectTrack, currentTrackId }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg w-full max-w-md mx-auto" id='track-list'>
      <h2 className="text-2xl font-bold text-white mb-4">Tracks</h2>
      
      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <div 
              key={track.id}
              onClick={() => onSelectTrack(track)}
              className={`p-3 rounded-md cursor-pointer transition-all ${
                currentTrackId === track.id 
                  ? 'bg-indigo-700 filter-blur-50 text-white hover:bg-indigo-600 text-indigo-100' 
                  : 'filter-blur-30 hover:bg-indigo-600 text-indigo-100'
              }`}
              id='track-item'
            >
              <div className="flex items-center">
                {track.coverArt && (
                  <div className="mr-3">
                    <img 
                      src={track.coverArt} 
                      alt={track.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-sm text-indigo-200">{track.artist}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-indigo-300">
            No tracks available
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackList;