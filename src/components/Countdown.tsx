import { useEffect, useState } from "react";
import styles from "@/styles/Countdown.module.scss";
import Title from "@/components/Title";

// Funções necessárias para o funcionamento
import { isPlural, countdownTrigger } from "@/functions/countdownFn";

const Countdown = (props) => {
  const [loaded, setLoaded] = useState(0);
  const [time, setTime] = useState(null);
  const { endDay, endMonth, endYear } = props;

  // Contador regressivo principal
  useEffect(
    () => countdownTrigger(endMonth, endDay, endYear, setTime, setLoaded),
    [endMonth, endDay, endYear, setTime],
  );

  // Componente principal
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
      {!time &&
        (loaded === -1 ? (
          <Title title="Comunidade" subtitle="Oficial" />
        ) : (
          <div className={styles.loading} />
        ))}
      ;
    </div>
  );
};

export default Countdown;
