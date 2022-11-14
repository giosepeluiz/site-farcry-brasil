// URL e Token de acesso ao DatoCMS
const API_URL = process.env.DATOCMS_API_URL;
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// Função assíncrona para acesso aos dados
async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

// Puxar toda a lista de jogos da franquia do DatoCMS
export const getAllGames = async () => {
  const data = await fetchCmsAPI(`
        {
            allFcgames(orderBy: _createdAt_ASC) {
              gameTitle,
              gameId
            }
          }
    `);

  return data.allFcgames;
};

// Puxar toda a lista de músicas da franquia do DatoCMS
export const getAllSongs = async () => {
  const data = await fetchCmsAPI(`
        {
          allFcsongs(orderBy: _createdAt_DESC, first: "50"){
            id
            gameId
            gamePlaylist
            deezer
            youtube
            spotify
          }
  }
    `);

  return data.allFcsongs;
};
