import { Link, Outlet } from "react-router-dom";
import logo from "../img/logo.png";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </main>
    </>
  );
}
