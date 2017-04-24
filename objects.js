var playlist = {
  Drake: 'Hotline Bling',
  Cake: 'Short Skirt Long Jacket'
}

function updatePlaylist(playlist, artist, name) {
  playlist[artist] = name
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
