import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#333",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
