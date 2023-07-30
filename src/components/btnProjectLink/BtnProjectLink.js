import "./style.css";

const BtnProjectLink = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline btn-link"
    >
      Project link
    </a>
  );
};

export default BtnProjectLink;
