import Header from './components/Investments/Header';
import InvestmentForm from './components/Investments/InvestmentForm';
import InvestmentTable from './components/Investments/InvestmentsTable';
import { useState } from 'react';

function App() {
  // Setting the state for calculate data
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // Default text styling
  const style = {
    textAlign: 'center'
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['currentSavings'];
    const yearlyContribution = +userInput['yearlyContribution'];
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <Header />

      <InvestmentForm onCalculate={calculateHandler} />
      {!userInput && <p style={style}>No Investment calculated yet.</p>}
      {userInput && <InvestmentTable data={yearlyData} initialInvestment={userInput['currentSavings']} />}
    </div>
  );
};

export default App;
