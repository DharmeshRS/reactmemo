import { useState } from "react";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  return (
    <div className="App">
      <Counter data={data} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setData(data + 1)}>Increment</button>
    </div>
  );
}
