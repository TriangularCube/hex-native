import React from "react";

const LoggedInContext = React.createContext({
    isLoggedIn: false,
    changeLoginState: () => {}
});

export const LoggedInContextProvider = LoggedInContext.Provider;
export const LoggedInContextConsumer = LoggedInContext.Consumer;

export default LoggedInContext;