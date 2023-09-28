import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => setUser(data));
      setIsReady(true);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isReady }}>
      {props.children}
    </UserContext.Provider>
  );
};
