import { useState } from "react";
import iconWave from "../img/iconWave.png";

export function Home() {
  const [examDate, setExamDate] = useState({
    months: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  return (
    <>
      <h2>Välkommen!</h2>
      <section className="home">
        <p>
          Jag heter Therese och är en blivande front end developer som älskar
          att skapa snygga och användarvänliga webbplatser. Jag har en passion
          för att lära mig nya saker och är alltid nyfiken på nya tekniker och
          metoder. Jag har en stor vilja att lära mig och utvecklas som
          utvecklare. Jag är en driven person som gillar att arbeta i team och
          har lätt för att samarbeta med andra. Jag är en positiv person som
          gillar att ha roligt på jobbet och göra andra glada. Jag är
          lösningsorienterad och löser gärna problem, är bra på att kommunicera
          och har hög arbetsmoral.
        </p>
        <section className="countDownSection">
          <h3>Jag tar examen om</h3>
          <div className="countDownDiv">
            <div className="countDown">
              <h4>{examDate.months}</h4>
              <p>Månader</p>
            </div>
            <div className="countDown">
              <h4>{examDate.day}</h4>
              <p>Dagar</p>
            </div>
            <div className="countDown">
              <h4>{examDate.hour}</h4>
              <p>Timmar</p>
            </div>
            <div className="countDown">
              <h4>{examDate.minute}</h4>
              <p>Minuter</p>
            </div>
            <div className="countDown">
              <h4>{examDate.second}</h4>
              <p>Sekunder</p>
            </div>
          </div>
        </section>
        <img className="iconWave" src={iconWave} alt="Tjej som vinkar" />
      </section>
    </>
  );
}
