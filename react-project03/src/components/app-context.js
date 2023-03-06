import React from "react";
const Context = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export default Context;
