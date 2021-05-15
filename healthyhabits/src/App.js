import React, { useContext, useReducer, } from "react";
import AppRouter from "./router";
import Header from "./header";

const AuthState = React.createContext({
  isAuthenticated: false,
    user: null,
    token: null,
});
const { Provider } = AuthState;
function AuthProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);
  return <Provider value={[state, dispatch]} {...props} />;
}
export const useAuthState = () => {
  return (useContext(AuthState))
}



const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: "Matt",
        token: "action.payload.token"
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      };
    default:
      return state;
  };
};

function App() {

  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <AuthProvider
      value={{state, dispatch}}>
      <header className="App-header">
      <Header />
      </header>
    <AppRouter/>
    </AuthProvider>
    </div>
  );
};

export default App;
