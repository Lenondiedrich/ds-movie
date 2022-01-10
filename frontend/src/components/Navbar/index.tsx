import { ReactComponent as GithubIcon } from "../../assets/imgs/github.svg";
import "./index.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/lenondiedrich"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/lenondiedrich</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
