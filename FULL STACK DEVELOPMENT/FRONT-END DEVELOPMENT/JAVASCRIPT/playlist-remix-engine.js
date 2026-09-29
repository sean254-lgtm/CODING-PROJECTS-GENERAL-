const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists){
  if(!Array.isArray(playlists)){
    return [];
  }

  const result = [];
  playlists.forEach((playlist, playlistIndex) => {
    playlist.forEach((track, trackIndex) => {
      result.push({
        ...track, 
        source: [playlistIndex, trackIndex]
      });
    });
  });

  return result;
}

function scoreTracks(tracks){
  if(!Array.isArray(tracks)){
    return [];
  }

  return tracks.map((track) => ({
    ...track, 
    score: track.votes * 10 - Math.abs(track.bpm - 120)
  }));
}

function dedupeTracks(tracks){
  if(!Array.isArray(tracks)){
    return [];
  }

  const seenIds = new Set();
  return tracks.filter((track) => {
    if(seenIds.has(track.trackId)){
      return false;
    } else {
      seenIds.add(track.trackId);
      return true;
    }
  });
}

function enforceArtistQuota(tracks, maxAttendance){
  if (!Array.isArray(tracks)) {
    return [];
  }

  const artistCounts = {};
  return tracks.filter((track) => {
    const count = artistCounts[track.artist] || 0;

    if(count < maxAttendance){
      artistCounts[track.artist] = count + 1;
      return true;
    }

    return false;
  });
}

function buildSchedule(tracks){
  if (!Array.isArray(tracks)) {
    return [];
  }
  
  return tracks.map((track, index) => ({
    slot: index + 1, 
    trackId: track.trackId
  }));
}

function remixPlaylist(playLists, maxAttendance){
  const flatTracks = flattenPlaylists(playLists);
  const scoredTracks = scoreTracks(flatTracks);
  const dedupedTracks = dedupeTracks(scoredTracks);
  const quotaTracks = enforceArtistQuota(dedupedTracks, maxAttendance);
  return buildSchedule(quotaTracks);
}
