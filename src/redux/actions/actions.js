export const setUser = (user) => {
    return {
      type: "LOGIN",
      payload: user,
    };
  };
  export const setAuthenticate = (boolvalue) => {
    return {
      type: "AUTHENTICATE",
      payload: boolvalue,
    };
  };
  
  export const setBlogs = (blogs) => {
    return {
      type: "SETBLOGS",
      payload: blogs,
    };
  };
  export const removeSelectedProduct = () => {
    return {
      type: "LOGOUT",
    };
  };