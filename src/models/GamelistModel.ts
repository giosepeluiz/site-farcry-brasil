// Esta classe gera a LISTA DE JOGOS a serem inseridos em nossa API.

import PlaylistModel from "./PlaylistModel";

export default class GamelistModel {
  #id: number;

  #uid: string;

  #game: string;

  #playlists: PlaylistModel[];

  constructor(id: number, uid: string, game: string, playlists: PlaylistModel[]) {
    this.#id = id;
    this.#uid = uid;
    this.#game = game;
    this.#playlists = playlists;
  }

  get id() {
    return this.#id;
  }

  get uid() {
    return this.#uid;
  }

  get game() {
    return this.#game;
  }

  get playlists() {
    return this.#playlists;
  }

  toObject() {
    return {
      id: this.#id,
      uid: this.#uid,
      game: this.#game,
      playlists: this.#playlists.map((response) => response.toObject()),
    };
  }
}
