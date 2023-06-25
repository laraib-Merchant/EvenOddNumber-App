import React, {useState} from "react";
import InputForm from "./components/InputForm/InputForm";
import Result from "./components/result/Result";
import './style.css';

function App() {
  const [result, setResult] = useState("Please Enter Any Number");
  
  const onInputHandler = (data) => {
    setResult(data);
  }
  const onResetHandler = (data) => {
    setResult(data);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="box">
            <h2>Even & Odd Number Game</h2>
            <InputForm onInput={onInputHandler} onReset={onResetHandler} />
            <Result result={result}/>
        </div>
      </div>
    </div>
  );
}

export default App;
