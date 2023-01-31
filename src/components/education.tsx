import iconComputer from "../img/iconComputer.png";

export function Education({}) {
  return (
    <>
      <h2>Utbildning</h2>
      <section className="Education">
        <div className="eduDiv">
          <h3>Medieinstitutet AB, Distans</h3>
          <h5>Front End Developer 2021-2023</h5>
          <p>
            - HTML, CSS, Javascript <br />- Angular & React
            <br />- NodeJs, Express, SQL, MySQL <br />- UX/UI
          </p>
        </div>
        <div className="eduDiv">
          <h3>Ljud och Bildskolan, LBS Helsingborg</h3>
          <h5>Gymnasieexamen, avgångsår 2013</h5>
          <p>
            - Mediaprogrammet <br />
            - Inriktning Webbdesign år 1 <br />- Inriktning Foto år 2
          </p>
        </div>
        <img src={iconComputer} alt="tjej som sitter vid laptop" />
        <img src={iconComputer} />
      </section>
    </>
  );
}
