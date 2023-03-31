import { Action } from "redux";
const intialState = {
  isAuthenticated:false,
  user:null,
  blogs:[]
};

 const reducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
      case "AUTHENTICATE":
        return { ...state, isAuthenticated: payload };
      case "SETBLOGS":
        return { ...state, blogs: payload };
        case "LOGOUT":
            return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
export default reducers;

