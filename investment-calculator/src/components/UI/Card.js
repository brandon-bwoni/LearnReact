import classes from './Button.module.css';

export default function Card(props) {

  return (
    <div className={classes.card}>
      {props.chidren}
    </div>
  );
}