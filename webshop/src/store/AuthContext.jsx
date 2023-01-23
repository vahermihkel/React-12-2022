import { createContext, useState } from "react";


const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkIfLoggedIn());

  function checkIfLoggedIn() {
    // tegelikkuses peaks tegema API päringu selle tokeni osas Firebase-i
    // fetch() siis küsib, kas see on ikka päris token või ei ole
    if (sessionStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{
      loggedIn: isLoggedIn,
      setLoggedIn: setIsLoggedIn
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthContext;

