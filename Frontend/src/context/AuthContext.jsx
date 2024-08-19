import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  // user: {
  //   _id: "66bc8712e8421adfc71b5ab5",
  //   username: "Hanvi",
  //   email: "hanvi@gmail.com",
  //   profilePicture: "",
  //   coverPicture: "",
  //   isAdmin: false,
  //   from: "Karnataka",
  //   city: "Bangalore",
  //   relationship: 1,
  //   followers: [],
  //   followings: [],
  //   // user: null,
  // },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
