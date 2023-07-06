import './Card.css';

export default function Card(props) {
  // console.log(props);

  return (
    <div className='card'>
      <img src={`./images/${props.image}`} className='card_image' alt='Card' />
      <div className='card_stats'>
        <img src={`./images/${props.star}`} className='card_star' alt="Star" />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  );
}

