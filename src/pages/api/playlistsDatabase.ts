import GamelistModel from "../../models/GamelistModel";
import PlaylistModel from "../../models/PlaylistModel";
import SongModel from "../../models/SongModel";

// Esta é a BASE DE DADOS de nossa API, a qual geraremos as playlists de cada jogo.

const gamelist: GamelistModel[] = [
  //
  // Trilha sonora de FAR CRY 2
  //
  new GamelistModel(1, "fc2", "Far Cry 2", [
    new PlaylistModel(1, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://bit.ly/2Hqd8MN"),
      new SongModel("Spotify", "https://spoti.fi/2JT2XPh"),
      new SongModel("Youtube", "https://bit.ly/1vjaPQv"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY 3
  //
  new GamelistModel(2, "fc3", "Far Cry 3", [
    new PlaylistModel(1, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://bit.ly/2qF5EuT"),
      new SongModel("Spotify", "https://spoti.fi/2HGowl9"),
      new SongModel("Youtube", "https://bit.ly/1FtNRJU"),
    ]),
    new PlaylistModel(2, "Músicas de Rádio", [
      new SongModel("Spotify", "https://rebrand.ly/ze4"),
      new SongModel("Youtube", "https://rebrand.ly/rf857e"),
    ]),
    new PlaylistModel(3, 'Música - "Make it Bun Dem"', [
      new SongModel("Deezer", "https://rebrand.ly/85ae69"),
      new SongModel("Spotify", "https://rebrand.ly/b065fe"),
      new SongModel("Youtube", "https://youtu.be/BGpzGu9Yp6Y"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY 3 BLOOD DRAGON
  //
  new GamelistModel(3, "fc3bd", "Far Cry 3 Blood Dragon", [
    new PlaylistModel(1, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://bit.ly/2qCFiuh"),
      new SongModel("Spotify", "https://spoti.fi/2HsQa7q"),
      new SongModel("Youtube", "https://bit.ly/17r96xf"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY 4
  //
  new GamelistModel(4, "fc4", "Far Cry 4", [
    new PlaylistModel(1, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://bit.ly/2HyintA"),
      new SongModel("Spotify", "https://rebrand.ly/8ae98"),
      new SongModel("Youtube", "https://bit.ly/1yDkocE"),
    ]),
    new PlaylistModel(2, "Músicas de Rádio", [
      new SongModel("Deezer", "https://rebrand.ly/rferd85"),
      new SongModel("Spotify", "https://rebrand.ly/9r133d"),
    ]),
    new PlaylistModel(3, 'Música - "Should I Stay or Should I Go"', [
      new SongModel("Deezer", "https://rebrand.ly/ebbdd4"),
      new SongModel("Spotify", "https://rebrand.ly/f4t736"),
      new SongModel("Youtube", "https://rebrand.ly/32ed2"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY PRIMAL
  //
  new GamelistModel(5, "fcp", "Far Cry Primal", [
    new PlaylistModel(1, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://bit.ly/2qCARzt"),
      new SongModel("Spotify", "https://spoti.fi/1LeEdzu"),
      new SongModel("Youtube", "https://bit.ly/1I4TzRI"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY 5
  //
  new GamelistModel(6, "fc5", "Far Cry 5", [
    new PlaylistModel(1, "Into the Flames (região do Jacob)", [
      new SongModel("Deezer", "https://bit.ly/2ESQ2c9"),
      new SongModel("Spotify", "https://spoti.fi/2qCpCXd"),
      new SongModel("Youtube", "https://bit.ly/2FInSBP"),
    ]),
    new PlaylistModel(2, "When the World Falls (região do John)", [
      new SongModel("Deezer", "https://bit.ly/2qAnzUo"),
      new SongModel("Spotify", "https://spoti.fi/2vm59LB"),
      new SongModel("Youtube", "https://bit.ly/2HHiD7x"),
    ]),
    new PlaylistModel(3, "We Will Rise Again (região da Faith)", [
      new SongModel("Deezer", "https://bit.ly/2JTcRAg"),
      new SongModel("Spotify", "https://spoti.fi/2qE16Vx"),
      new SongModel("Youtube", "https://bit.ly/2vkEfEd"),
    ]),
    new PlaylistModel(4, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://bit.ly/2HHvM0e"),
      new SongModel("Spotify", "https://spoti.fi/2vocafb"),
      new SongModel("Youtube", "https://bit.ly/2qBRxqK"),
    ]),
    new PlaylistModel(5, "Inside Eden's Gate (trilha do filme)", [
      new SongModel("Deezer", "https://bit.ly/2ER8WQT"),
      new SongModel("Spotify", "https://spoti.fi/2qE1dQX"),
      new SongModel("Youtube", "https://bit.ly/2tPCRsn"),
    ]),
    new PlaylistModel(6, "Músicas Licenciadas e Rádios", [
      new SongModel("Deezer", "https://rebrand.ly/eb6fd8"),
      new SongModel("Spotify", "https://rebrand.ly/d62ca"),
    ]),
    new PlaylistModel(7, 'Música - "Happy Together" (Trailer Cooperativo)', [
      new SongModel("Deezer", "https://rebrand.ly/64517"),
      new SongModel("Spotify", "https://rebrand.ly/06a6f"),
    ]),
    new PlaylistModel(8, "Far Cry Arcade", [
      new SongModel("Deezer", "http://bit.ly/2H7qNUD"),
      new SongModel("Spotify", "https://spoti.fi/2J1nn7H"),
      new SongModel("Youtube", "http://bit.ly/2xtPjj5"),
    ]),
    new PlaylistModel(9, 'DLC "Hours of Darkness"', [
      new SongModel("Deezer", "http://bit.ly/2J2E96k"),
      new SongModel("Spotify", "https://spoti.fi/2J5Qvuq"),
      new SongModel("Youtube", "http://bit.ly/FC5HoDTrilha"),
    ]),
    new PlaylistModel(10, 'DLC "Lost on Mars"', [
      new SongModel("Deezer", "http://bit.ly/2NnUzba"),
      new SongModel("Spotify", "https://spoti.fi/2mnxVEt"),
      new SongModel("Youtube", "http://bit.ly/2mqtQQ1"),
    ]),
    new PlaylistModel(11, 'DLC "Dead Living Zombies"', [
      new SongModel("Deezer", "https://rb.gy/uzzrsr"),
      new SongModel("Spotify", "https://rb.gy/s0c0mc"),
      new SongModel("Youtube", "https://rb.gy/nqcig9"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY NEW DAWN
  //
  new GamelistModel(7, "fcnd", "Far Cry New Dawn", [
    new PlaylistModel(1, "Trilha Sonora Original", [
      new SongModel("Deezer", "https://rb.gy/uqd6q2"),
      new SongModel("Spotify", "https://rb.gy/4l67uc"),
      new SongModel("Youtube", "https://rb.gy/tv9bgl"),
    ]),
    new PlaylistModel(2, "Músicas Licenciadas e Rádios", [
      new SongModel("Deezer", "https://rb.gy/xux45f"),
      new SongModel("Spotify", "https://rb.gy/4l67uc"),
    ]),
  ]),
  //
  // Trilha sonora de FAR CRY 6
  //
  new GamelistModel(8, "fc6", "Far Cry 6", [
    new PlaylistModel(1, "Trilha Sonora do Trailer Cinemático", [
      new SongModel("Deezer", "https://bit.ly/2qCARzt"),
      new SongModel("Spotify", "https://spoti.fi/1LeEdzu"),
      new SongModel("Youtube", "https://bit.ly/1I4TzRI"),
    ]),
    new PlaylistModel(2, 'Música - "This is How it Goes" (Trailer Resolver)', [
      new SongModel("Deezer", "https://rebrand.ly/4e1fe8"),
      new SongModel("Spotify", "https://rebrand.ly/1b54bb"),
      new SongModel("Youtube", "https://youtu.be/MxZfRXbty7M"),
    ]),
  ]),
];

export default gamelist;
