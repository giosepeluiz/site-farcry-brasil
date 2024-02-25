// Função que verifica se a URL aponta que é um jogo Far Cry
export const isFarCry = (value: string) => {
  switch (value) {
    case "farcry-2":
    case "farcry-3":
    case "fc-blood-dragon":
    case "farcry-4":
    case "fc-primal":
    case "farcry-5":
    case "fc-new-dawn":
    case "farcry-6":
      return true;
    default:
      return false;
  }
};

// Função que transforma uma frase em estilo url amigável
export const toFriendlyText = (url: string) =>
  url
    .toString() // Convert to string
    .normalize("NFD") // Change diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove illegal characters
    .replace(/\s+/g, "-") // Change whitespace to dashes
    .toLowerCase() // Change to lowercase
    .replace(/&/g, "-and-") // Replace ampersand
    .replace(/[^a-z0-9-]/g, "") // Remove anything that is not a letter, number or dash
    .replace(/-+/g, "-") // Remove duplicate dashes
    .replace(/^-*/, "") // Remove starting dashes
    .replace(/-*$/, ""); // Remove trailing dashes
