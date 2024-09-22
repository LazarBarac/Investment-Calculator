import Header from "./components/Header";
import FormInput from "./components/FormInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1 ? true : false;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <FormInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Please Enter Valid Duration!</p>
      )}
    </>
  );
}

export default App;
