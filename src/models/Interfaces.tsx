export interface Props {
  [key: string]: any;
}

export interface StylesType {
  [key: string]: any;
}

export interface Game {
  gameId?: string;
  title?: string;
  gameTitle?: string;
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
