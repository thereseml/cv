import iconWave from "../img/iconWave.png";

export function Home() {
  return (
    <>
      <h2>Välkommen!</h2>
      <section className="Home">
        <p>
          Jag heter Therese och är en blivande front end developer, tar examen
          Juni 2023, som älskar att skapa snygga och användarvänliga
          webbplatser. Jag har en passion för att lära mig nya saker och är
          alltid nyfiken på nya tekniker och metoder. Jag har en stor vilja att
          lära mig och utvecklas som utvecklare. Jag är en driven person som
          gillar att arbeta i team och har lätt för att samarbeta med andra. Jag
          är en positiv person som gillar att ha roligt på jobbet och göra andra
          glada. Jag är lösningsorienterad och löser gärna problem, är bra på
          att kommunicera och har hög arbetsmoral.
        </p>
        <img className="iconWave" src={iconWave} alt="Tjej som vinkar" />
      </section>
    </>
  );
}
