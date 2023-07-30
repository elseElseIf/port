import "./style.css";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/elseElseIf">
                <img src={gitHub} alt="Link"></img>
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/mikhail-pryka">
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
  );
};

export default Footer;
