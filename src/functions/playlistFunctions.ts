// Função que verifica se a URL aponta que é um jogo Far Cry
export const isFarCry = (value) => {
  switch (value) {
    case "fc2":
    case "fc3":
    case "fc3bd":
    case "fc4":
    case "fcp":
    case "fc5":
    case "fcnd":
    case "fc6":
      return true;
    default:
      return false;
  }
};

// Função que transforma uma frase em estilo url amigável
export const toFriendlyText = (url) =>
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
