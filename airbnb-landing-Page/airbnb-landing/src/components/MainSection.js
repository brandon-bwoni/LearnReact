import group from './images/group.png';
import './MainSection.css';

function MainBody() {
  return (
    <section className='hero'>
      <img src={group} className='hero_image' alt='Hero'></img>
      <h1 className='hero_header'>Onlines Experiences</h1>
      <p className='hero_text'>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}

export default MainBody;
