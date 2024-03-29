import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import qrPet from "../img/qrpet.png";
import movieShop from "../img/movieshop.png";
import katanaSushi from "../img/katanasushi.png";
import ljungbys from "../img/ljungbys.png";
import sawadeekha from "../img/sawadeekha.png";

export function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>
        Här hittar ni ett litet urval av de projekt jag gjort under mina
        studier. Klicka på ikonerna för att komma till github repo eller se
        projektet live.
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
          <p>En fiktiv filmbutik i Angular, med hjälp av api.</p>
          <img src={movieShop} alt="bild på hemsidan movieshop" />
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
          <h3>Grupparbete i React (Katana Sushi)</h3>
          <p>Fiktig restaurang med bokningssystem.</p>
          <img src={katanaSushi} alt="bild på hemsidan Katana Sushi" />
          <div className="icons">
            <a href="https://github.com/GamerShabandari/react-restaurang">
              <FaGithub />
            </a>
            <a href="https://gamershabandari.github.io/react-restaurang/">
              <RiComputerLine />
            </a>
          </div>
        </div>

        <div className="flexItem">
          <h3>Lia uppgift, elementor (Ljungby Semesterby)</h3>
          <p>
            Kund som önskade deras befintliga sida byggd i wordpres och
            elementor.
          </p>
          <img src={ljungbys} alt="bild på hemsidan Ljungby Semesterby" />
          <div className="icons">
            <a href="https://ljungby-semesterby.se/">
              <RiComputerLine />
            </a>
          </div>
        </div>

        <div className="flexItem">
          <h3>Lia uppgift, elementor & woocommerce (SawadeeKha)</h3>
          <p>
            Kund som ville ha sammanslagning av två hemsidor, en webbshop och en
            bokningssida för massagesalong.
          </p>
          <img src={sawadeekha} alt="bild på hemsidan SawadeeKha" />
          <div className="icons">
            <a href="https://sawadeekha.se/">
              <RiComputerLine />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
