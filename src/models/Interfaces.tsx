export interface Game {
  gameId?: string;
  title?: string;
  gameTitle?: string;
}

export interface GameListHeader {
  game?: string;
}

export interface GameListPlaylist {
  songs: string[];
  singleGame: string;
}

export interface GameListSelection {
  game?: string;
}

export interface GameListSong {
  song: string[];
}

export interface ListGame {
  id?: string;
  title?: string;
  releaseDate?: string;
  hasSongs: boolean;
  map: any;
}

export interface PlaylistItem {
  spotify?: string;
  deezer?: string;
  youtube?: string;
}

export interface SlugInterface {
  songs: string[];
  games: string[];
}

export interface SongItemProps {
  styles: string;
  size: string;
  streamingName: string;
  url: string;
}

export interface StylesType {
  [key: string]: any;
}

export interface Title {
  title: string;
  subtitle: string;
}
