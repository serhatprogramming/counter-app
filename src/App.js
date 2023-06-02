import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    console.log("counter: " + counter);
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increase}> + </button>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export default App;
