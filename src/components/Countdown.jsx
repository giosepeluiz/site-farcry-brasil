import { useEffect, useState } from "react";
import styles from "../styles/Countdown.module.scss";

const padLeft = (value) => {
  if (value < 10) {
    return String(value).padStart(2, "0");
  }
  return String(value);
};

const Countdown = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Oct 7, 2021 00:00:00").getTime();
    countDownDate.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    // Update the count down every 1 second
    const x = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = padLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = padLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = padLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = padLeft(Math.floor((distance % (1000 * 60)) / 1000));

      // Output the result in an element with id="demo"
      setTime({ days, hours, minutes, seconds });

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
  return (
    <div className={styles.countdown}>
      {time && (
        <>
          <div className={styles.counter}>
            <div className={styles.time}>{time.days}</div>
            <div className={styles.info}>dias</div>
          </div>
          <div className={styles.counter}>
            <div className={styles.time}>{time.hours}</div>
            <div className={styles.info}>horas</div>
          </div>
          <div className={styles.counter}>
            <div className={styles.time}>{time.minutes}</div>
            <div className={styles.info}>minutos</div>
          </div>
          <div className={styles.counter}>
            <div className={styles.time}>{time.seconds}</div>
            <div className={styles.info}>segundos</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Countdown;
