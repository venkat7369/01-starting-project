import {useState} from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsvalid = userInput.duration >= 1;

    function handleChange(inputIdentifiers, newValue) {
      setUserInput((prevUserInput) => {
          return {
              ...prevUserInput,
              [inputIdentifiers]: +newValue,
          };
      }

      );
  }
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsvalid && <p className="center"> Please enter a duration greater than zero.</p>}
    {inputIsvalid && <Results input={userInput}/>}
    </>
  );

}

export default App
