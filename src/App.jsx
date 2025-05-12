import React from "react";
import { useState } from "react";
import Header from "./components/header.jsx";
import UserInput from "./components/userInput.jsx";
import ResultTable from "./components/resultTable.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputValid = userInput.duration >= 1;

  return (
    <main>
      <section id="calculator">
        <h2>Investment Calculator</h2>
        <Header />
        <UserInput userInput={userInput} onChangeInput={handleChange} />
        {!inputValid && (
          <p className="center">Please enter a duration of at least 1 year.</p>
        )}
        {inputValid && <ResultTable input={userInput} />}
      </section>
    </main>
  );
}

export default App;
