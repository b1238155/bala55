import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log("Hello from React component!");
  }, []);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
