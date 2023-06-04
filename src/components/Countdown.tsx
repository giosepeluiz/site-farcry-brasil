"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/Countdown.module.scss";
import Title from "@/components/Title";

// Importação das funções necessárias para o funcionamento
import { isPlural, countdownTrigger } from "@/functions/countdownFn";
import { Loading } from "./Loading";

// Definição de uma interface para o objeto 'time'
interface Time {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Definição da interface para as props do componente Countdown
interface CountdownProps {
  [key: string]: any;
}

const Countdown = (props: CountdownProps) => {
  const [loaded, setLoaded] = useState(0);
  const [time, setTime] = useState<Time | null>(null); // Declaração do estado 'time' como uma instância de Time ou null
  const { endDay, endMonth, endYear } = props; // Desestruturação das propriedades recebidas via props

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
      {!time && (loaded === -1 ? <Title title="Comunidade" subtitle="Oficial" /> : <Loading />)};
    </div>
  );
};

export default Countdown;
