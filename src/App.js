import { useState } from "react";

const ShowCounter = ({ counter }) => <p>{counter}</p>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    console.log("counter: " + counter);
    setCounter(counter + 1);
  };

  const decrease = () => {
    console.log("counter: " + counter);
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <ShowCounter counter={counter} />
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
      <button onClick={() => setCounter(0)}>reset</button>
      <br />
      <button onClick={() => setCounter(counter + 5)}>+ by 5</button>
      <button onClick={() => setCounter(counter - 5)}>- by 5</button>
    </>
  );
};

export default App;
