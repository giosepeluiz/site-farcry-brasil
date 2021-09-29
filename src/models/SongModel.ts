// Esta classe gera a LISTA DE OPÇÕES DE CADA PLAYLIST a serem inseridos em nossa API, como Youtube, Spotify, Deezer etc.

export default class SongModel {
  #type: string;

  #url: string;

  constructor(type: string, url: string) {
    this.#type = type;
    this.#url = url;
  }

  get type() {
    return this.#type;
  }

  get url() {
    return this.#url;
  }

  toObject() {
    return {
      type: this.#type,
      url: this.#url,
    };
  }
}
