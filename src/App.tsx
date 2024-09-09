import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count => count + 1);
  const dec = () => setCount(count => count - 1);

  return (
    <>
      <div>
        <button onClick={dec}>-</button>
        <div>{count}</div>
        <button onClick={inc}>+</button>
      </div>
      <div>Hello from actions - TODO: vite</div>
    </>
  );
}