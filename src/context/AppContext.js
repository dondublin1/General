import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [userEmail, setUserEmail] = useState(0);

  const getUserEmail = (email) => {
    console.log("emkmacmkas", email);
    setUserEmail(email);
  };

  return (
    <AppContext.Provider
      value={{
        userEmail,
        getUserEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
