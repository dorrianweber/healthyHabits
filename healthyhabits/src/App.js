import React from "react"
import AppRouter from "./router";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      </header>
    <AppRouter/>
    </div>
  );
}

export default App;
