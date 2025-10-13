
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav >
       <style>{`
        .cert-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: 15px;
        }
        .cert-list a {
          display: block;
          padding: 10px 15px;
          border: 1.5px solid cyan;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.4);
          color: cyan;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          width: 100%;
          text-align: left;
        }
        .cert-list a:hover {
          background: cyan;
          color: black;
          transform: translateX(5px);
        }
      `}</style>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/hobbies">Hobbies</Link></li>
        <li><Link to="/certifications">Certifications</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
