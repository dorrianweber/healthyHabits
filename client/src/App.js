import React, { useReducer } from "react";
import AppRouter from "./router";
import AuthProvider, { reducer } from "./utils/state";
import Header from "./components/Header";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <AuthProvider value={{ state, dispatch }}>
        <header className="App-header">
          <Header />
        </header>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
