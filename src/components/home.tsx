import { useEffect, useState } from "react";
import iconWave from "../img/iconWave.png";

export function Home() {
  const [examDate, setExamDate] = useState({
    months: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const examDate = new Date("2023-06-09T12:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = examDate.getTime() - now.getTime();
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const day = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hour = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((diff % (1000 * 60)) / 1000);
      setExamDate({ months, day, hour, minute, second });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Välkommen!</h2>
      <section className="home">
        <p>
          Jag heter Therese och är en blivande front end developer som gillar
          att skapa snygga och användarvänliga webbplatser. Jag har en passion
          för att lära mig nya saker och är alltid nyfiken på nya tekniker och
          metoder. Jag har en stor vilja att lära mig och utvecklas som
          utvecklare. Jag är en driven person som gillar att arbeta i team och
          har lätt för att samarbeta med andra. Jag är en positiv person som
          vill att ha roligt på jobbet och göra andra glada. Jag är
          lösningsorienterad och löser gärna problem, är bra på att kommunicera
          och har hög arbetsmoral.
        </p>
        <section className="countDownSection">
          <h3>Jag tar examen om</h3>
          <div className="countDownDiv">
            <div className="countDown">
              <h5>{examDate.months}</h5>
              <p>Månader</p>
            </div>
            <div className="countDown">
              <h5>{examDate.day}</h5>
              <p>Dagar</p>
            </div>
            <div className="countDown">
              <h5>{examDate.hour}</h5>
              <p>Timmar</p>
            </div>
            <div className="countDown">
              <h5>{examDate.minute}</h5>
              <p>Minuter</p>
            </div>
            <div className="countDown">
              <h5>{examDate.second}</h5>
              <p>Sekunder</p>
            </div>
          </div>
        </section>
        <img className="iconWave" src={iconWave} alt="Tjej som vinkar" />
      </section>
    </>
  );
}
