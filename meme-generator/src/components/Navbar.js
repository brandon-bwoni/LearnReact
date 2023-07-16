import './Navbar.css';
import troll from '../images/troll.png';

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <img src={troll} alt='Troll face' className='nav-logo' />
      <div className='nav-text'>
        <h1>Meme Generator</h1>
      </div>
    </nav>

  );
}