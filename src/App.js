import "./App.css";
import { useState } from "react";
// +=

function App() {
  const name = "Umar";
  const isNameShowing = true;
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "User"}</h1>
      <div className="cont">
        <div className="display">
          <h2>{display}</h2>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setDisplay(result);
            }}
          >
            +
          </button>
          {/* <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}> */}
          {/* - */}
          {/* </button> */}
          <button>/</button>
          <button>*</button>
          <button>^</button>
          <button
            onClick={() => {
              setDisplay(result);
            }}
          >
            =
          </button>
        </div>
        <div className="numbers">
          <button onClick={() => setDisplay(0)}>0</button>
          <button
            onClick={() => {
              setDisplay(1);
              setCounter(counter + 1);
              setResult(counter + 1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setDisplay(2);
              setCounter(counter + 2);
              setResult(counter + 2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setDisplay(3);
              setCounter(counter + 3);
              setResult(counter + 3);
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              setDisplay(4);
              setCounter(counter + 4);
              setResult(counter + 4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setDisplay(5);
              setCounter(counter + 5);
              setResult(counter + 5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setDisplay(6);
              setCounter(counter + 6);
              setResult(counter + 6);
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              setDisplay(7);
              setCounter(counter + 7);
              setResult(counter + 7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setDisplay(0);
              setCounter(counter + 0);
              setResult(counter + 0);
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              setDisplay(8);
              setCounter(counter + 8);
              setResult(counter + 8);
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              setDisplay(9);
              setCounter(counter + 9);
              setResult(counter + 9);
            }}
          >
            9
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
