// Esta classe gera a PLAYLIST DE CADA JOGO a serem inseridos em nossa API.

import SongModel from "./SongModel";

export default class PlaylistModel {
  #id: number;

  #name: string;

  #options: SongModel[];

  constructor(id: number, name: string, options: SongModel[]) {
    this.#id = id;
    this.#name = name;
    this.#options = options;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get options() {
    return this.#options;
  }

  toObject() {
    return {
      id: this.#id,
      name: this.#name,
      options: this.#options.map((response) => response.toObject()),
    };
  }
}
