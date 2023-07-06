import contact from './assets/card1.png';

export default function Contants() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={contact} className='contact-Image' />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  );
}