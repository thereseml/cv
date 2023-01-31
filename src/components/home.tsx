import { Portfolio } from "./portfolio";
import { Education } from "./education";
import { Experience } from "./experience";
import iconWave from "../img/iconWave.png";

export function Home() {
  return (
    <>
      <h2>Välkommen!</h2>
      <section className="Home">
        <p>Hejhej</p>
        <img src={iconWave} />
      </section>
    </>
  );
}
