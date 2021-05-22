import React, { useContext, useReducer, } from "react";


const AuthState = React.createContext({
    isAuthenticated: false,
      user: null,
      token: null,
  });
  const { Provider } = AuthState;
  export default function AuthProvider({ value = [], ...props }) {
    const [state, dispatch] = useReducer(reducer, []);
    return <Provider value={[state, dispatch]} {...props} />;
  }
  export const useAuthState = () => {
    return (useContext(AuthState))
  }
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        // localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          // token: action.payload.token
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          // token: null
        };
      default:
        return state;
    };
  };

