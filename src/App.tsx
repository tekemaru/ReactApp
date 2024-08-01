import React, { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// App コンポーネントの定義
export default function App() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
    </div>
  );
}
