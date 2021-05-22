import React, { useReducer } from "react";
import AppRouter from "./router";
import AuthProvider, { reducer } from "./utils/state"



function App() {

  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <AuthProvider
        value={{ state, dispatch }}>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
