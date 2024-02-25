// Interface para o cabeçalho da lista de jogos
export interface GameListHeader {
  game?: string;
  games?: string[];
}

// Interface para a lista de reprodução de músicas de um jogo específico
export interface GameListPlaylist {
  songs: Song[];
  singleGame: string;
}

// Interface para uma música na lista de reprodução
interface Song {
  id?: string;
  gameId?: string;
  gamePlaylist?: string;
  spotify?: string;
  deezer?: string;
  youtube?: string;
}

// Interface para a seleção de jogos e músicas
export interface GameListSelection {
  game?: string;
  games?: string[];
  songs?: string[];
}

// Interface para a lista de músicas de um jogo
export interface GameListSong {
  song: string[];
}

// Interface para um item na lista de reprodução
export interface PlaylistItem {
  spotify?: string;
  deezer?: string;
  youtube?: string;
}

// Interface para o slug (por exemplo, parte da URL) que contém listas de músicas e jogos
export interface SlugInterface {
  songs: string[];
  games: string[];
}

// Interface para as propriedades de um item de música em uma lista
export interface SongItemProps {
  styles: string;
  size: string;
  streamingName: string;
  url: string;
}

// Interface para um objeto que representa estilos
export interface StylesType {
  [key: string]: any;
}

// Interface para o título com subtítulo
export interface Title {
  title: string;
  subtitle: string;
}
