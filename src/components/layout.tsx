import { Link, Outlet } from "react-router-dom";
import logo from "../img/logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export function Layout() {
  return (
    <>
      <div className="logoDiv">
        <img src={logo} />
        <div className="titleDiv">
          <h1>Therese Lindholm</h1>
          <h4>Front End Developer</h4>
        </div>
      </div>
      <main>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/experience">Erfarenhet</Link>
              </li>
              <li>
                <Link to="/education">Utbildning</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </main>
      <footer>
        <h4>Kontaka mig:</h4>
        <a href="mailto:tm-l@live.se">
          <FiMail />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100004642035342">
          <FaFacebookSquare />
        </a>
        <a href="https://www.linkedin.com/in/therese-lindholm-759368222/">
          <FaLinkedin />
        </a>
      </footer>
    </>
  );
}
