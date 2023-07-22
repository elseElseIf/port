import "./styles/main.css";
import gitHub from "./img/icons/gitHub.svg";
import linkedIn from "./img/icons/linkedIn.svg";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS,, HTML, CSS, NPM, BootStrap</p>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src={gitHub} alt="Link"></img>
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src={linkedIn} alt="Link"></img>
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
