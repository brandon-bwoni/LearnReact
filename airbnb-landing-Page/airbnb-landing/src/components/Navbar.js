import airbnLogo from './images/airbnbLogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={airbnLogo} className='logo'></img>
    </nav>
  );
}

export default Navbar;