// Acrescenta um ZERO à ESQUERDA
export const padLeft = (value) => {
  if (value < 10) {
    return String(value).padStart(2, "0");
  }
  return String(value);
};

// Verifica se o valor é PLURAL ou SINGULAR
export const isPlural = (value) => {
  if (value === "00" || value === "01") {
    return false;
  }
  return true;
};
