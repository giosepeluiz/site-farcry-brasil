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

// Contador regressivo principal
export const countdownTrigger = (endMonth, endDay, endYear, setTime, setLoaded) => {
  // Define a data final
  const countDownDate = new Date(`${endMonth}/${endDay}/${endYear} 00:00:00`).getTime();
  countDownDate.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

  // Atualiza o contador a cada um segundo
  const x = setInterval(() => {
    // Retorna a data e a hora de hoje
    const now = new Date().getTime();
    now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // Calcula a diferença entre a data final e agora
    const distance = countDownDate - now;

    // Cálculo dos dias, minutos e segundos
    const days = padLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = padLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = padLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = padLeft(Math.floor((distance % (1000 * 60)) / 1000));

    // Insere o resultado no State
    setTime({ days, hours, minutes, seconds });

    // Se o contador acabar, encerra o contador
    if (distance < 0) {
      clearInterval(x);
      setTime(null);
      setLoaded(-1);
    }
  }, 1000);
};
