import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => setUser(data));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
