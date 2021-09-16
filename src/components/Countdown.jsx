import { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.scss";
import CommunityTitle from "./CommunityTitle";

// Funções necessárias para o funcionamento
import { padLeft, isPlural } from "../functions/countdownFunctions";

const Countdown = (props) => {
  const [time, setTime] = useState(null);
  const { endDay, endMonth, endYear } = props;

  useEffect(() => {
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
      }
    }, 1000);
  });
  return (
    <div className={styles.countdown}>
      {time && (
        <>
          {time.days && (
            <div className={styles.counter}>
              <div className={styles.time}>{time.days}</div>
              <div className={styles.info}>{isPlural(time.days) ? "dias" : "dia"}</div>
            </div>
          )}
          {time.hours && (
            <div className={styles.counter}>
              <div className={styles.time}>{time.hours}</div>
              <div className={styles.info}>{isPlural(time.hours) ? "horas" : "hora"}</div>
            </div>
          )}
          {time.minutes && (
            <div className={styles.counter}>
              <div className={styles.time}>{time.minutes}</div>
              <div className={styles.info}>{isPlural(time.minutes) ? "minutos" : "minuto"}</div>
            </div>
          )}
          {time.seconds && (
            <div className={styles.counter}>
              <div className={styles.time}>{time.seconds}</div>
              <div className={styles.info}>{isPlural(time.seconds) ? "segundos" : "segundo"}</div>
            </div>
          )}
        </>
      )}
      {!time && <CommunityTitle title="Comunidade" subtitle="Oficial" />};
    </div>
  );
};

export default Countdown;
