import classes from './InvestmentForm.module.css';
import { useState } from 'react';

export default function InvestmentForm(props) {

  const initilValues = {
    current_savings: '',
    yearly_contribution: '',
    expected_return: '',
    duration: ''
  };
  // State for managing input form
  const [investment, setInvestment] = useState(initilValues);

  // Form input event handler
  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setInvestment(prevInvestment => {
      return ({
        ...prevInvestment, [name]: +value
      });
    });
  };

  // Form submission handler
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Collecting user input
    props.onCalculate({
      currentSavings: investment.current_savings,
      yearlyContribution: investment.yearly_contribution,
      expectedReturn: investment.expected_return,
      duration: investment.duration
    }
    );

    // Resetting the form
    setInvestment(prevState => {

      return (initilValues);
    });
  };


  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current_savings">Current Savings ($)</label>
          <input
            type="number"
            id="current_savings"
            onChange={onChangeHandler}
            name='current_savings'
            value={investment.current_savings}
          />
        </p>
        <p>
          <label htmlFor="yearly_contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly_contribution"
            onChange={onChangeHandler}
            name='yearly_contribution'
            value={investment.yearly_contribution}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected_return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected_return"
            onChange={onChangeHandler}
            name='expected_return'
            value={investment.expected_return}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={onChangeHandler}
            name='duration'
            value={investment.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={onChangeHandler}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}