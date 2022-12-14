import { Portfolio } from "./portfolio";
import { Education } from "./education";
import { Experience } from "./experience";
import iconWave from "../img/iconWave.png";

export function Home() {
  return (
    <>
      <section className="Home">
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
          lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
          viverra nec consectetur ante hendrerit. Donec et mollis dolor.
          Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam
          tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut
          libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <img src={iconWave} />
      </section>
    </>
  );
}
