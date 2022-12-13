export function Home() {
  return (
    <main>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="Home"></section>
      <section className="About"></section>
      <section className="Experience"></section>
      <section className="Education"></section>
      <section className="Portfolio"></section>
    </main>
  );
}
