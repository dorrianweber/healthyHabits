import React, { useContext, useReducer } from "react";

const AuthState = React.createContext();
const initialAuth = {
  isAuthenticated: false,
  user: null,
  token: null,
};

if (localStorage.getItem("auth") === "true") {
  var newAuth = {
    isAuthenticated: true,
    user: localStorage.getItem("user"),
    token: null,
  };
}

const { Provider } = AuthState;
export default function AuthProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, newAuth || initialAuth);
  return <Provider value={[state, dispatch]} {...props} />;
}
export const useAuthState = () => {
  return useContext(AuthState);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("auth", true);
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
