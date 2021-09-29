import playlist from "../playlistsDatabase";

// API responsável por gerar a lista de logos e playlists.

const index = (req, res) => {
  res.status(200).json(playlist.map((list) => list.toObject()));
};

export default index;
