var playlist = {
  Norah: "Come Away With Me",
  Kanye: "Only One",
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle'
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
