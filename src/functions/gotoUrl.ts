// Abre um link em uma nova janela
const gotoUrl = (url: string, newTab: boolean = true) => {
  if (newTab) {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
};

export default gotoUrl;
