import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import qrPet from "../img/qrpet.png";
import movieShop from "../img/movieshop.png";
import katanaSushi from "../img/katanasushi.png";

export function Portfolio({}) {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
        lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam
        viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent
        et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
        congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed
        arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      <div className="flexDiv">
        <div className="flexItem">
          <h3>Examensarbete (QR Pet)</h3>
          <p>
            QR Pet, en fiktiv hemsida där du kan registrera dina husdjur och
            tillbaka får du en QR kod att sätta i halsbandet. Ifall ditt djur
            springer bort så kan upphittaren skanna qr koden och få fram dina
            kontaktuppgifter. Byggt i React.
          </p>
          <img src={qrPet} alt="bild på hemsidan QR Pet" />
          <img src={qrPet} />
          <div className="icons">
            <a href="https://github.com/thereseml/QRPet">
              <FaGithub />
            </a>
            <a href="https://qr-pet.vercel.app/">
              <RiComputerLine />
            </a>
          </div>
        </div>

        <div className="flexItem">
          <h3>Angularuppgift (MovieShop)</h3>
          <p>En fiktiv filmbutik i Angular, med hjälp av api.</p
          <img src={movieShop} alt="bild på hemsidan movieshop" />
          <img src={movieShop} />
          <div className="icons">
            <a href="https://github.com/thereseml/MovieShop">
              <FaGithub />
            </a>
            <a href="https://thereseml.github.io/MovieShop/MovieShop/products">
              <RiComputerLine />
            </a>
          </div>
        </div>

        <div className="flexItem">
          <h3>Grupparbete i Angular (Katana Sushi)</h3>
          <p>Fiktig restaurang med bokningssystem.</p>
          <img src={katanaSushi} alt="bild på hemsidan Katana Sushi" />
          <img src={katanaSushi} />
          <div className="icons">
            <a href="https://github.com/GamerShabandari/react-restaurang">
              <FaGithub />
            </a>
            <a href="https://gamershabandari.github.io/react-restaurang/">
              <RiComputerLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
