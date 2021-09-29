import playlist from "../playlistsDatabase";

// API responsável por gerar a lista de logos e playlists.

const playlists = (req, res) => {
  const gamelist = playlist.filter((game) => game.uid === req.query.uid[0]);

  if (gamelist.length === 1) {
    const songs = gamelist[0].playlists.filter((value) => value.id === +req.query.uid[1]);

    if (songs.length === 1) {
      res.status(200).json(songs[0].toObject());
    } else {
      res.status(200).json(gamelist[0].toObject());
    }
  } else {
    res.status(204).send();
  }
};

export default playlists;
