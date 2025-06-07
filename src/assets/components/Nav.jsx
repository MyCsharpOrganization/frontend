import { Link } from 'react-router-dom';
import '../../styles/Nav.css'; 
import Symbol from '../../assets/images/Symbol.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Symbol} alt="" />
        <p> Ventixe</p>
        </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
