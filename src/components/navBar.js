import { NavLink } from 'react-router-dom';
import './styles/navBar.css';

const Navbar = () => {
  const links = [
    { name: 'Books', path: '/' },
    { name: 'Categories', path: 'categories' },
  ];
  return (
    <nav className="navbar">
      <a className="nav-anchor" href="/">Bookstore CMS</a>
      <ul className="nav-link-items">
        {links.map((link) => (
          <li key={link.name}><NavLink className="nav-link active-link" to={link.path}>{link.name}</NavLink></li>
        ))}
      </ul>
      <button className="icon-button" type="button"><span className="material-icon primary-color">person</span></button>
    </nav>
  );
};

export default Navbar;
